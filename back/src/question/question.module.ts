import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Theme } from './theme/theme.entity';
import { ThemeController } from './theme/theme.controller';
import { ThemeService } from './theme/theme.service';
import { ThemeModule } from './theme/theme.module';

@Module({
  controllers: [QuestionController, ThemeController],
  providers: [QuestionService, ThemeService],
  imports: [TypeOrmModule.forFeature([Question, Theme]), ThemeModule],
})
export class QuestionModule {}
