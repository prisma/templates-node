export const UrlShortenerWithMysqlWithReferentialIntegrityPrisma = [
  "-- CreateTable\nCREATE TABLE Link (\n    id VARCHAR(191) NOT NULL,\n    createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),\n    updatedAt DATETIME(3) NOT NULL,\n    url VARCHAR(191) NOT NULL,\n    shortUrl VARCHAR(191) NOT NULL,\n    userId VARCHAR(191) NULL,\n\n    PRIMARY KEY (id)\n) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci",
  "\n\n-- CreateTable\nCREATE TABLE User (\n    id VARCHAR(191) NOT NULL,\n    createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),\n    updatedAt DATETIME(3) NOT NULL,\n    name VARCHAR(191) NULL,\n    email VARCHAR(191) NOT NULL,\n\n    PRIMARY KEY (id)\n) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
]