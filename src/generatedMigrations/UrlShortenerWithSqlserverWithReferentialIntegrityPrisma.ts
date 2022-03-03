export const UrlShortenerWithSqlserverWithReferentialIntegrityPrisma = [
  "\n\n-- CreateTable\nCREATE TABLE [dbo].[Link] (\n    [id] NVARCHAR(1000) NOT NULL,\n    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Link_createdAt_df] DEFAULT CURRENT_TIMESTAMP,\n    [updatedAt] DATETIME2 NOT NULL,\n    [url] NVARCHAR(1000) NOT NULL,\n    [shortUrl] NVARCHAR(1000) NOT NULL,\n    [userId] NVARCHAR(1000),\n    CONSTRAINT [Link_pkey] PRIMARY KEY ([id])\n)",
  "\n\n-- CreateTable\nCREATE TABLE [dbo].[User] (\n    [id] NVARCHAR(1000) NOT NULL,\n    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,\n    [updatedAt] DATETIME2 NOT NULL,\n    [name] NVARCHAR(1000),\n    [email] NVARCHAR(1000) NOT NULL,\n    CONSTRAINT [User_pkey] PRIMARY KEY ([id])\n)"
]