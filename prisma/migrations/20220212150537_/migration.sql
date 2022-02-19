/*
  Warnings:

  - Added the required column `bookUrl` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `bookUrl` VARCHAR(191) NOT NULL;
