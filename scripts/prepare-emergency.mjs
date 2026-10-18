/** Local preparation only; default/import never deploys or reads credentials. */
import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import {createHash} from 'node:crypto';
export function validateEmergency(value) {
 if(!value || !/^[a-f0-9]{40}$/.test(value.commit??'') ||
 !/^dpl_[A-Za-z0-9]+$/.test(value.rollbackDeployment??'') ||
 typeof value.reason!=='string' || !value.reason.trim() ||
 typeof value.compatibilityEvidence!=='string' || !value.compatibilityEvidence.trim() ||
 value.fullTests!=='deferred')throw Error('emergency_input_invalid');
 return value;
}
export function prepareEmergency(inputPath,receiptPath) {
 const input=validateEmergency(JSON.parse(readFileSync(inputPath,'utf8')));
 const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
 const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
 const check=()=>{if(git('status','--porcelain') || git('rev-parse','HEAD')!==input.commit)throw Error('clean_matching_commit_required');};
 if(Number(process.versions.node.split('.')[0])<20)throw Error('supported_node_required');
 check();
 execFileSync('npm',['run','build:emergency'],{cwd:root,stdio:'inherit'});
 check();
 const receipt={schemaVersion:1,projectId:'prj_Je7JBpWtZylowsMekQhGmaykusrh',mode:'emergency',commit:input.commit,
 sourceTree:git('rev-parse','HEAD^{tree}'),lockSha256:createHash('sha256').update(readFileSync(resolve(root,'package-lock.json'))).digest('hex'),
 rollbackDeployment:input.rollbackDeployment,reason:input.reason,compatibilityEvidence:input.compatibilityEvidence,
 compatibility:'operator_attested_not_automatically_proved',build:'passed',fullTests:'deferred',
 nodeVersion:process.versions.node,preparedAt:new Date().toISOString(),deployed:false,followupRequired:['live_source_parity','harmless_read','full_tests','review_or_revert']};
 writeFileSync(receiptPath,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});return receipt;
}
if(process.argv[1]===fileURLToPath(import.meta.url)) {
 if(process.argv.length!==4)console.log('Usage: node scripts/prepare-emergency.mjs PRIVATE_INPUT_JSON NEW_RECEIPT_PATH (local build only; no deploy)');
 else console.log(JSON.stringify(prepareEmergency(resolve(process.argv[2]),resolve(process.argv[3]))));
}
