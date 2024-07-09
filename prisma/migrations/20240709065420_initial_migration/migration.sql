-- CreateTable
CREATE TABLE "WEDDING_Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "WEDDING_Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WEDDING_Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "refresh_token_expires_in" INTEGER,

    CONSTRAINT "WEDDING_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WEDDING_Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WEDDING_Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WEDDING_User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "WEDDING_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WEDDING_VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "expires_initial" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE INDEX "WEDDING_Post_name_idx" ON "WEDDING_Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WEDDING_Account_provider_providerAccountId_key" ON "WEDDING_Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "WEDDING_Session_sessionToken_key" ON "WEDDING_Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "WEDDING_User_email_key" ON "WEDDING_User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WEDDING_VerificationToken_token_key" ON "WEDDING_VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "WEDDING_VerificationToken_identifier_token_key" ON "WEDDING_VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "WEDDING_Post" ADD CONSTRAINT "WEDDING_Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "WEDDING_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WEDDING_Account" ADD CONSTRAINT "WEDDING_Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WEDDING_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WEDDING_Session" ADD CONSTRAINT "WEDDING_Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WEDDING_User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
