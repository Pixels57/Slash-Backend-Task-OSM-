-- DropForeignKey
ALTER TABLE "Carts_Products" DROP CONSTRAINT "Carts_Products_cartID_fkey";

-- AlterTable
CREATE SEQUENCE users_cartid_seq;
ALTER TABLE "Users" ALTER COLUMN "cartID" SET DEFAULT nextval('users_cartid_seq');
ALTER SEQUENCE users_cartid_seq OWNED BY "Users"."cartID";
