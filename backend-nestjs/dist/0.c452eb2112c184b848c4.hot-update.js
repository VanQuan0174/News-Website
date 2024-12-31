"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 39:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogsService = void 0;
const blog_entity_1 = __webpack_require__(38);
const category_entity_1 = __webpack_require__(37);
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(11);
const promises_1 = __webpack_require__(15);
let BlogsService = class BlogsService {
    constructor(blogsRepository, categotiesRepository) {
        this.blogsRepository = blogsRepository;
        this.categotiesRepository = categotiesRepository;
    }
    async findAll() {
        return await this.blogsRepository.find();
    }
    async findOne(id) {
        return await this.blogsRepository.findOne({
            where: { id: id },
        });
    }
    async create(createBlogDto) {
        const { categoryId, title, summary, content, image, type, priority } = createBlogDto;
        const category = await this.categotiesRepository.findOne({
            where: { id: Number(categoryId) },
        });
        if (!category) {
            throw new common_1.NotFoundException('Danh mục không tồn tại');
        }
        const newBlog = this.blogsRepository.create({
            title,
            summary,
            content,
            image,
            type,
            priority,
            categoryId,
        });
        return this.blogsRepository.save(newBlog);
    }
    async destroy(id) {
        const blog = await this.blogsRepository.findOne({
            where: { id: Number(id) },
        });
        if (!blog) {
            throw new common_1.BadRequestException(`Không tìm thấy bài viết với id: ${id}`);
        }
        if (blog.image) {
            const imagePath = `./uploads/blog/${blog.image}`;
            try {
                await (0, promises_1.unlink)(imagePath);
                console.log(`Ảnh đại diện đã được xóa: ${imagePath}`);
            }
            catch (error) {
                console.error(`Lỗi khi xóa ảnh đại diện: ${error.message}`);
            }
        }
        const imagePaths = this.extractImagePaths(blog.content);
        for (const imgPath of imagePaths) {
            const absolutePath = './uploads' + imgPath.replace('http://localhost:8080', '');
            try {
                await (0, promises_1.unlink)(absolutePath);
                console.log(`Ảnh trong nội dung đã được xóa: ${imgPath}`);
            }
            catch (error) {
                console.error(`Lỗi khi xóa ảnh trong nội dung: ${imgPath} - ${error.message}`);
            }
        }
        await this.blogsRepository.delete(id);
        return `Xóa thành công bài viết với id: ${id}`;
    }
    extractImagePaths(content) {
        const imageUrls = [];
        const regex = /<img[^>]+src="([^">]+)"/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            imageUrls.push(match[1]);
        }
        return imageUrls;
    }
    async update(id, updateBlogDto) {
        const { categoryId, title, summary, content, image, type, priority } = updateBlogDto;
        const blog = await this.blogsRepository.findOne({ where: { id } });
        if (!blog) {
            throw new common_1.NotFoundException(`Blog với ID ${id} không tồn tại`);
        }
        if (categoryId) {
            const category = await this.categotiesRepository.findOne({
                where: { id: categoryId },
            });
            if (!category) {
                throw new common_1.NotFoundException(`Danh mục với ID ${categoryId} không tồn tại`);
            }
            blog.category = category;
        }
        Object.assign(blog, updateBlogDto);
        return this.blogsRepository.save(blog);
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], BlogsService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b1632ebd9149b9ecc13f")
/******/ })();
/******/ 
/******/ }
;