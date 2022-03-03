export const SaasWithSqliteWithReferentialIntegrityPrisma = [
  "-- CreateTable\nCREATE TABLE \"User\" (\n    \"id\" TEXT NOT NULL PRIMARY KEY,\n    \"createdAt\" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    \"updatedAt\" DATETIME NOT NULL,\n    \"name\" TEXT,\n    \"email\" TEXT NOT NULL,\n    \"accountId\" TEXT\n)",
  "\n\n-- CreateTable\nCREATE TABLE \"Account\" (\n    \"id\" TEXT NOT NULL PRIMARY KEY,\n    \"createdAt\" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    \"updatedAt\" DATETIME NOT NULL,\n    \"stripeCustomerId\" TEXT NOT NULL,\n    \"stripeSubscriptionId\" TEXT NOT NULL,\n    \"referrer\" TEXT,\n    \"isActive\" BOOLEAN NOT NULL\n)",
  "\n\n-- CreateTable\nCREATE TABLE \"Invite\" (\n    \"id\" TEXT NOT NULL PRIMARY KEY,\n    \"dateSent\" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    \"email\" TEXT NOT NULL,\n    \"accountId\" TEXT,\n    \"isValid\" BOOLEAN NOT NULL DEFAULT true\n)"
]