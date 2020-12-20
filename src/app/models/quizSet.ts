import { Quiz } from './quiz';
export class QuizSet{
  public id: number | undefined ;
  constructor(
      public  category: string,
      public  description: string,
      public  quizzes: Quiz[]
        ){}
  }
