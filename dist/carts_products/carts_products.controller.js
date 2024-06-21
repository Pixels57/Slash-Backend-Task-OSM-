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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsProductsController = void 0;
const common_1 = require("@nestjs/common");
const carts_products_service_1 = require("./carts_products.service");
const carts_products_model_1 = require("./carts_products.model");
let CartsProductsController = class CartsProductsController {
    constructor(cartsProductsService) {
        this.cartsProductsService = cartsProductsService;
    }
    async addItem(data) {
        return this.cartsProductsService.create(data);
    }
    async getCart(data) {
        return this.cartsProductsService.getCart(data);
    }
    async updateItem(data) {
        const { cartID, productID, add } = data;
        return this.cartsProductsService.update(cartID, add, productID);
    }
    async removeItem(data) {
        const { cartID, productID } = data;
        return this.cartsProductsService.remove(cartID, productID);
    }
};
exports.CartsProductsController = CartsProductsController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carts_products_model_1.Carts_Products]),
    __metadata("design:returntype", Promise)
], CartsProductsController.prototype, "addItem", null);
__decorate([
    (0, common_1.Get)(':user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartsProductsController.prototype, "getCart", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartsProductsController.prototype, "updateItem", null);
__decorate([
    (0, common_1.Delete)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartsProductsController.prototype, "removeItem", null);
exports.CartsProductsController = CartsProductsController = __decorate([
    (0, common_1.Controller)('api/cart'),
    __metadata("design:paramtypes", [carts_products_service_1.CartsProductsService])
], CartsProductsController);
//# sourceMappingURL=carts_products.controller.js.map