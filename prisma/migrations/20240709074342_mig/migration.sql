-- CreateTable
CREATE TABLE "WEDDING_TmpTest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "score" DOUBLE PRECISION,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "WEDDING_TmpTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WEDDING_TmpTest_name_idx" ON "WEDDING_TmpTest"("name");

-- CreateIndex
CREATE INDEX "WEDDING_TmpTest_createdAt_idx" ON "WEDDING_TmpTest"("createdAt");

-- AddForeignKey
ALTER TABLE "WEDDING_TmpTest" ADD CONSTRAINT "WEDDING_TmpTest_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "WEDDING_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
