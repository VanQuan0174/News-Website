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
const blog_service_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/modules/services/cms-service/services/blog.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const common_1 = __webpack_require__(6);
const create_blog_1 = __webpack_require__(44);
const update_blog_1 = __webpack_require__(46);
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
        return this.blogsService.findOne(+id);
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
            url: `uploads/blog/content/${file.filename}`,
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
    (0, common_1.Get)(':id'),
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

/***/ 30:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CmsServiceModule = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(10);
const user_service_1 = __webpack_require__(9);
const jwt_1 = __webpack_require__(26);
const config_1 = __webpack_require__(31);
const auth_service_1 = __webpack_require__(25);
const passport_1 = __webpack_require__(28);
const local_strategy_1 = __webpack_require__(32);
const jwt_strategy_1 = __webpack_require__(34);
const category_service_1 = __webpack_require__(36);
const category_entity_1 = __webpack_require__(37);
const blog_entity_1 = __webpack_require__(38);
const blog_service_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './services/blog.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let CmsServiceModule = class CmsServiceModule {
};
exports.CmsServiceModule = CmsServiceModule;
exports.CmsServiceModule = CmsServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, category_entity_1.CategoryEntity, blog_entity_1.BlogEntity]),
            jwt_1.JwtModule.registerAsync({
                useFactory: async (configService) => ({
                    global: true,
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: configService.get('JWT_ACCESS_TOKEN_EXPIRED'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            passport_1.PassportModule,
        ],
        providers: [
            auth_service_1.AuthService,
            user_service_1.UsersService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            category_service_1.CategoriesService,
            blog_service_1.BlogsService,
        ],
        exports: [auth_service_1.AuthService, user_service_1.UsersService, category_service_1.CategoriesService, blog_service_1.BlogsService],
    })
], CmsServiceModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("86f98bfefca9718c6003")
/******/ })();
/******/ 
/******/ }
;