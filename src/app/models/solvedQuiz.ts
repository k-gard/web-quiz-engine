import { Quiz } from './quiz';

export class SolvedQuiz{
  public quiz: Quiz | undefined;

  constructor(
    public id: number ,
    public quizId: number,
    public completedAt: Date,
        ){}
  }
