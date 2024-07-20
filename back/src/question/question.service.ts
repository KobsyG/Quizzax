import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question, Theme } from './question.entity';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(Question)
        private readonly questionsRepository: Repository<Question>,
    ) {}

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const question: Question = this.questionsRepository.create(createQuestionDto);
        return this.questionsRepository.save(question);
    }
 
    async findAll() {
        return this.questionsRepository.find();
    }

    async findByTheme(theme: Theme): Promise<Question[]> {
        return this.questionsRepository.findBy({
            theme: theme,
    }   )
    }
}
