import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Theme } from './theme.entity';
import { CreateThemeDto } from '../dto/createTheme.dto';

@Injectable()
export class ThemeService {

    constructor(
        @InjectRepository(Theme)
        private readonly themeRepository: Repository<Theme>,
    ) {}

    // Create a theme

    async create(createThemeDto: CreateThemeDto): Promise<Theme> {
        const theme: Theme = this.themeRepository.create(createThemeDto);
        return this.themeRepository.save(theme);
    }

    // Get all Themes

    async findAll() {
        return this.themeRepository.find();
    }
}
