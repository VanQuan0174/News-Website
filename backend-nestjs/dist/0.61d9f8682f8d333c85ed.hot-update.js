"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 38:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogEntity = exports.TABLE_BLOGS = exports.BlogType = void 0;
const typeorm_1 = __webpack_require__(11);
const category_entity_1 = __webpack_require__(37);
var BlogType;
(function (BlogType) {
    BlogType["BLOG"] = "Blog";
    BlogType["TIN_TUC"] = "Tin t\u1EE9c";
    BlogType["HUONG_DAN"] = "H\u01B0\u1EDBng d\u1EABn";
    BlogType["DANH_GIA"] = "\u0110\u00E1nh gi\u00E1";
})(BlogType || (exports.BlogType = BlogType = {}));
exports.TABLE_BLOGS = 'blog';
let BlogEntity = class BlogEntity extends typeorm_1.BaseEntity {
};
exports.BlogEntity = BlogEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.blogs),
    (0, typeorm_1.JoinColumn)({ name: 'categoryId' }),
    __metadata("design:type", typeof (_a = typeof category_entity_1.CategoryEntity !== "undefined" && category_entity_1.CategoryEntity) === "function" ? _a : Object)
], BlogEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext'),
    __metadata("design:type", String)
], BlogEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], BlogEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: BlogType,
        default: BlogType.BLOG,
    }),
    __metadata("design:type", String)
], BlogEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], BlogEntity.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BlogEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BlogEntity.prototype, "updated_at", void 0);
exports.BlogEntity = BlogEntity = __decorate([
    (0, typeorm_1.Entity)(exports.TABLE_BLOGS)
], BlogEntity);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0bb69ca44b55bb0a80ff")
/******/ })();
/******/ 
/******/ }
;