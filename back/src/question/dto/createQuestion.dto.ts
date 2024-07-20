import { Theme } from "../question.entity";

export class CreateQuestionDto {
    question: string;

    theme: Theme;

    point: number;
}