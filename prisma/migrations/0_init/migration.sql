-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id","code")
);

-- CreateTable
CREATE TABLE "sentences" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
    "front_lang_code" TEXT NOT NULL,
    "back_lang_code" TEXT NOT NULL,
    "front" TEXT,
    "back" TEXT,

    CONSTRAINT "sentences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "languages_code_key" ON "languages"("code");

