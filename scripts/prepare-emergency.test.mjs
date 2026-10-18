import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {validateEmergency} from './prepare-emergency.mjs';
test('exact commit/rollback/test debt are mandatory and default is inert',()=>{
 const v={commit:'a'.repeat(40),rollbackDeployment:'dpl_verified',reason:'urgent correction',compatibilityEvidence:'current compatible reader',fullTests:'deferred'};
 assert.equal(validateEmergency(v),v);
 for(const x of [{commit:'main'},{rollbackDeployment:''},{reason:''},{compatibilityEvidence:''},{fullTests:'passed'}])assert.throws(()=>validateEmergency({...v,...x}));
 assert.match(execFileSync(process.execPath,['scripts/prepare-emergency.mjs'],{encoding:'utf8'}),/no deploy/);
});
test('emergency keeps the real target build',()=>{
 const p=JSON.parse(readFileSync('package.json','utf8'));
 assert.equal(p.scripts['build:emergency'],"npm run build");
});
