/*
  Warnings:

  - You are about to drop the `Carts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cartID]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Carts_Products" DROP CONSTRAINT "Carts_Products_cartID_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_cartID_fkey";

-- DropTable
DROP TABLE "Carts";

-- CreateIndex
CREATE UNIQUE INDEX "Users_cartID_key" ON "Users"("cartID");

-- AddForeignKey
ALTER TABLE "Carts_Products" ADD CONSTRAINT "Carts_Products_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Users"("cartID") ON DELETE RESTRICT ON UPDATE CASCADE;
