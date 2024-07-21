import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theme } from './theme.entity';

@Module({
    controllers: [ThemeController],
    providers: [ThemeService],
    imports: [TypeOrmModule.forFeature([Theme])]
})
export class ThemeModule {}
