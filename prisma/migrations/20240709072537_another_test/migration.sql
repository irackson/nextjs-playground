/*
  Warnings:

  - Added the required column `test_string2` to the `WEDDING_VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WEDDING_VerificationToken" ADD COLUMN     "test_string2" TEXT NOT NULL;
