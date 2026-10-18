# Emergency hotfix path

Existing target: `nextjs-playground` / `prj_Je7JBpWtZylowsMekQhGmaykusrh`, existing Vercel team `iracksons-projects`. The ordinary build is `npm run build`; full tests, if present, are separate. Normal Git/CI/provider settings remain unchanged. This separate entry prepares a build-checked urgent correction and explicitly defers the full suite. It neither deploys nor grants new authority.

Prisma generate is client generation only; never run the separate prisma migration script, deploy migrations, seed data or fetch production DB credentials for this path. Preserve existing auth.

## Prepare and publish

Use the existing locked dependencies and the project's supported Node runtime. Record the actual current canonical deployment and choose a previously verified Ready same-project rollback that can read all current state. Shape validation is not compatibility proof. Do not reset stored data or replay effects to make a rollback work.

Commit a minimal fix through existing review/security rules. Supply a private JSON outside the checkout containing full40hex `commit`, `rollbackDeployment` (`dpl_ID`), `reason`, `compatibilityEvidence` and `fullTests: "deferred"`. Run:

```sh
npm run hotfix:prepare -- /absolute/private/input.json /absolute/new-receipt.json
```

Default/no-argument invocation is inert. Preparation requires clean exact source before and after the real `build:emergency`, records commit/tree/lock hash/runtime and test debt, and writes its receipt exclusively. It does not create credentials, read environment values or start a server. Existing builds may need public compiler/font assets or their approved build configuration; never weaken validation or use production data to obtain a passing local build. Failure stops preparation.

A normal authorized push/PR can create automatic previews and main can create production deployment. Reconcile that existing deployment before considering CLI; do not create a duplicate demonstration deployment. When an explicit urgent CLI deployment is needed and already authorized, inspect the existing exact project/team noninteractively, record a write-once intent and submit once:

```sh
vercel deploy --prod --yes --scope iracksons-projects --project prj_Je7JBpWtZylowsMekQhGmaykusrh --meta sourceCommit=FULL_SHA --meta releasePhase=emergency
```

Do not change branch protections or required checks, relink/create projects, add a token, expand scopes, enable paid services or change normal push behavior. A timeout needs read-only provider reconciliation before any retry.

## Verify, rollback, follow up

Verify Ready, canonical alias and exact expected commit. Independently compare actual uploaded source/bundle identity with the local lock/config/source manifest through supported provider metadata. If deployment file-tree readback is unavailable, record byte-parity as unverified; provider commit metadata alone is not byte-for-byte proof. Do not deploy again merely to manufacture that evidence. Perform only the planned harmless public read; do not create business data, test incidents or outbound effects. Passing build/HTTP200 is not full-product recovery evidence.

On failure, reconcile then use `vercel rollback VERIFIED_ID --scope iracksons-projects` only after confirming same-project Ready state and current reader compatibility. Verify alias/source and the harmless read after rollback. Code rollback does not restore data or clear uncertainty. Run deferred checks immediately afterward: npm run typecheck; npm run lint; npm test. Fix or compatibly revert failures and retain exact-SHA results; the emergency receipt never claims those tests passed.

The build and local focused tests are separate from actual provider publication/rollback acceptance. Reusable future-project guidance and coverage live in `irackson/ianrackson-ops/EMERGENCY-HOTFIX.md` and `CROSS-PROJECT-HOTFIX-COVERAGE.md`; this document establishes this target only.
