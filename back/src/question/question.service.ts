import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Theme } from './theme/theme.entity';

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(Question)
        private readonly questionsRepository: Repository<Question>,
        @InjectRepository(Theme)
        private readonly themeRepository: Repository<Theme>,
    ) {}

    // Create a question

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const theme = await this.themeRepository.findOneBy({
            theme: createQuestionDto.theme,
        })
        const question: Question = this.questionsRepository.create({
            question: createQuestionDto.question,
            reponse: createQuestionDto.reponse,
            theme: theme,
            point: createQuestionDto.point,
        });
        return this.questionsRepository.save(question);
    }

    // Remove a question

    async remove(id: number) {
        const question = await this.findById(id);
        return await this.questionsRepository.delete(question);
    }
 
    // Get all questions

    async findAll() {
        return this.questionsRepository.find({
            relations: {
                theme: true,
            },
        });
    }

    // Get questions by theme

    async findByTheme(theme: Theme): Promise<Question[]> {
        return this.questionsRepository.findBy({
            theme: theme,
    }   )
    }

    // Get questions by id

    async findById(id: number): Promise<Question> {
        return await this.questionsRepository.findOneBy({
            id: id,
    }   )
    }
}
