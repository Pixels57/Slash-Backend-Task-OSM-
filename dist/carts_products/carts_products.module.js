"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsProductsModule = void 0;
const common_1 = require("@nestjs/common");
const carts_products_service_1 = require("./carts_products.service");
const prisma_service_1 = require("../prisma.service");
const carts_products_controller_1 = require("./carts_products.controller");
let CartsProductsModule = class CartsProductsModule {
};
exports.CartsProductsModule = CartsProductsModule;
exports.CartsProductsModule = CartsProductsModule = __decorate([
    (0, common_1.Module)({
        controllers: [carts_products_controller_1.CartsProductsController],
        providers: [carts_products_service_1.CartsProductsService, prisma_service_1.PrismaService]
    })
], CartsProductsModule);
//# sourceMappingURL=carts_products.module.js.map