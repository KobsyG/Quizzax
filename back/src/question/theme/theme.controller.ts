import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { Theme } from './theme.entity';
import { CreateThemeDto } from '../dto/createTheme.dto';

@Controller('theme')
export class ThemeController {
    constructor(private readonly themeService: ThemeService) { }


    // Create a theme

    @Post()
    async create(@Body() createThemeDto: CreateThemeDto): Promise<Theme> {
        return await this.themeService.create(createThemeDto);
    }

    // Get all themes
    @Get()
    async findAll(): Promise<Theme[]> {
        return await this.themeService.findAll();
    }

}