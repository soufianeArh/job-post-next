/*
  Warnings:

  - You are about to drop the column `postedBy` on the `Job` table. All the data in the column will be lost.
  - Added the required column `postedById` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Job` DROP FOREIGN KEY `Job_postedBy_fkey`;

-- DropIndex
DROP INDEX `Job_postedBy_fkey` ON `Job`;

-- AlterTable
ALTER TABLE `Job` DROP COLUMN `postedBy`,
    ADD COLUMN `postedById` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_postedById_fkey` FOREIGN KEY (`postedById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
