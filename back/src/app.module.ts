import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { QuestionController } from './question/question.controller';
import { QuestionModule } from './question/question.module';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { Question } from './question/question.entity';
import { Game } from './game/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      entities: [User, Question, Game],
      synchronize: true,
    }),
    UsersModule,
    QuestionModule,
    GameModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
