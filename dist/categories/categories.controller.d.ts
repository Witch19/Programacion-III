import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.ts';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./category.entity").Category>;
    findAll(): Promise<import("./category.entity").Category[]>;
    findOne(id: string): Promise<import("./category.entity").Category | null>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./category.entity").Category | null>;
    remove(id: string): Promise<import("./category.entity").Category | null>;
}
