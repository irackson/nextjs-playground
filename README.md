# [PROD URL](https://nextjs-playground-rho-six.vercel.app/)

## DEPLOYMENT DETAILS

> TODO add details

## USING PRISMA

\*make sure that CI="true" is not in your .env (at least if running locally)

To set up a NEW database, run `npx prisma migrate deploy` (runs through all migrations)

1. Change schema.prisma
2. Run `npx prisma migrate dev --name another_test --create-only` to generate migration file
3. Run `npx prisma migrate deploy` to apply migration
4. Run `npx prisma generate` to update client
