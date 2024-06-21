/*
  Warnings:

  - Added the required column `quantity` to the `Carts_Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carts_Products" ADD COLUMN     "quantity" INTEGER NOT NULL;
