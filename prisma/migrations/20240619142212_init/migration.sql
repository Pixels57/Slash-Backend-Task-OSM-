-- CreateTable
CREATE TABLE "Carts" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cartID" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carts_Products" (
    "cartID" INTEGER NOT NULL,
    "productID" INTEGER NOT NULL,

    CONSTRAINT "Carts_Products_pkey" PRIMARY KEY ("cartID","productID")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders_Products" (
    "orderID" INTEGER NOT NULL,
    "productID" INTEGER NOT NULL,

    CONSTRAINT "Orders_Products_pkey" PRIMARY KEY ("orderID","productID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carts_Products" ADD CONSTRAINT "Carts_Products_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "Carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carts_Products" ADD CONSTRAINT "Carts_Products_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders_Products" ADD CONSTRAINT "Orders_Products_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders_Products" ADD CONSTRAINT "Orders_Products_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
