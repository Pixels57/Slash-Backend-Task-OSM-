"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CartsProductsService = class CartsProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const { cartID, productID } = data;
        const createData = {
            ...data,
            ...(productID && { product: { connect: { id: productID } } }),
        };
        return this.prisma.carts_Products.upsert({
            where: {
                cartID_productID: {
                    cartID: cartID,
                    productID: productID,
                },
            },
            create: {
                cartID: cartID,
                productID: productID,
                quantity: 1,
            },
            update: {
                quantity: {
                    increment: 1
                }
            },
        });
    }
    async getCart(data) {
        const cartIDString = data.toString();
        const ID = parseInt(cartIDString, 10);
        return this.prisma.carts_Products.findMany({
            where: {
                cartID: ID
            },
            select: {
                productID: true,
                quantity: true,
            }
        });
    }
    async update(cartID, add, productID) {
        if (add) {
            return this.prisma.carts_Products.update({
                where: {
                    cartID_productID: {
                        cartID: cartID,
                        productID: productID,
                    },
                },
                data: {
                    quantity: {
                        increment: 1
                    }
                },
            });
        }
        else {
            return this.prisma.carts_Products.update({
                where: {
                    cartID_productID: {
                        cartID: cartID,
                        productID: productID,
                    },
                },
                data: {
                    quantity: {
                        decrement: 1
                    }
                },
            });
        }
    }
    async remove(cartID, productID) {
        return this.prisma.carts_Products.delete({
            where: {
                cartID_productID: {
                    cartID: cartID,
                    productID: productID,
                },
            },
        });
    }
};
exports.CartsProductsService = CartsProductsService;
exports.CartsProductsService = CartsProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartsProductsService);
//# sourceMappingURL=carts_products.service.js.map