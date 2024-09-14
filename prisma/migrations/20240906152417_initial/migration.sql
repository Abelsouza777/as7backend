 
CREATE TABLE "aasstuds" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "msg" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aasstuds_pkey" PRIMARY KEY ("id")
);
