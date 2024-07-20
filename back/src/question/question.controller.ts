import { Body, Controller, Get, Post } from '@nestjs/common';
import { Question, Theme } from './question.entity';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { plainToClass } from '@nestjs/class-transformer';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    // Create a question

    @Post()
    async create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
        return await plainToClass(Question, this.questionService.create(createQuestionDto));
    }

    // Get all questions
    @Get()
    async findAll(): Promise<Question[]> {
        return await this.questionService.findAll(); // plainToClass ?
    }

    // Get all questions from a theme
    @Get('theme')
    async findByTheme(theme: Theme) : Promise<Question[]> {
        return await this.questionService.findByTheme(theme);
    }

}
