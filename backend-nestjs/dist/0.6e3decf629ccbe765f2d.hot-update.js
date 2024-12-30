"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 43:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogsController = void 0;
const customize_1 = __webpack_require__(20);
const blog_service_1 = __webpack_require__(39);
const common_1 = __webpack_require__(6);
const create_blog_1 = __webpack_require__(46);
const update_blog_1 = __webpack_require__(48);
const multer_1 = __webpack_require__(22);
const platform_express_1 = __webpack_require__(21);
const uuid_1 = __webpack_require__(23);
let BlogsController = class BlogsController {
    constructor(blogsService) {
        this.blogsService = blogsService;
    }
    findAll() {
        return this.blogsService.findAll();
    }
    findOne(id) {
        return this.blogsService.findOne(id);
    }
    async create(createBlogDto, file) {
        if (file) {
            createBlogDto.image = file.filename;
        }
        return await this.blogsService.create(createBlogDto);
    }
    remove(id) {
        return this.blogsService.destroy(id);
    }
    async update(id, updateBlogDto) {
        return this.blogsService.update(id, updateBlogDto);
    }
    async createPostImage(data, file) {
        return {
            'url': ``
        };
    }
};
exports.BlogsController = BlogsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/blog',
            filename: (req, file, callback) => {
                const filename = `${(0, uuid_1.v4)()}-${file.originalname}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_blog_1.CreateBlogDto !== "undefined" && create_blog_1.CreateBlogDto) === "function" ? _b : Object, typeof (_d = typeof Express !== "undefined" && (_c = Express.Multer) !== void 0 && _c.File) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof update_blog_1.UpdateBlogDto !== "undefined" && update_blog_1.UpdateBlogDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('create-content-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/blog/content',
            filename: (req, file, callback) => {
                const filename = `${(0, uuid_1.v4)()}-${file.originalname}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_g = typeof Express !== "undefined" && (_f = Express.Multer) !== void 0 && _f.File) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "createPostImage", null);
exports.BlogsController = BlogsController = __decorate([
    (0, common_1.Controller)('blogs'),
    (0, customize_1.Public)(),
    __metadata("design:paramtypes", [typeof (_a = typeof blog_service_1.BlogsService !== "undefined" && blog_service_1.BlogsService) === "function" ? _a : Object])
], BlogsController);


/***/ }),

/***/ 46:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBlogDto = void 0;
const class_validator_1 = __webpack_require__(17);
const validations_1 = __webpack_require__(18);
const blog_entity_1 = __webpack_require__(38);
const class_transformer_1 = __webpack_require__(47);
class CreateBlogDto {
}
exports.CreateBlogDto = CreateBlogDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBlogDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.TITLE_REQUIRED }),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.SUMMARY_REQUIRED }),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "summary", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.CONTENT_REQUIRED }),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBlogDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(blog_entity_1.BlogType),
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.TYPE_REQUIRED }),
    __metadata("design:type", typeof (_a = typeof blog_entity_1.BlogType !== "undefined" && blog_entity_1.BlogType) === "function" ? _a : Object)
], CreateBlogDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.PRIORITY_REQUIRED }),
    __metadata("design:type", Number)
], CreateBlogDto.prototype, "priority", void 0);


/***/ }),

/***/ 48:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBlogDto = void 0;
const class_validator_1 = __webpack_require__(17);
const validations_1 = __webpack_require__(18);
const blog_entity_1 = __webpack_require__(38);
const class_transformer_1 = __webpack_require__(47);
class UpdateBlogDto {
}
exports.UpdateBlogDto = UpdateBlogDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateBlogDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.TITLE_REQUIRED }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.SUMMARY_REQUIRED }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "summary", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.CONTENT_REQUIRED }),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBlogDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(blog_entity_1.BlogType),
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.TYPE_REQUIRED }),
    __metadata("design:type", typeof (_a = typeof blog_entity_1.BlogType !== "undefined" && blog_entity_1.BlogType) === "function" ? _a : Object)
], UpdateBlogDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({ message: validations_1.VALIDATIONS.BLOG.PRIORITY_REQUIRED }),
    __metadata("design:type", Number)
], UpdateBlogDto.prototype, "priority", void 0);


/***/ }),

/***/ 47:
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6957301731bd97a5da4c")
/******/ })();
/******/ 
/******/ }
;