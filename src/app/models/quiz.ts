export class Quiz{
  public id: number | undefined ;
  constructor(
      public  title: string,
      public  text: string,
      public  options: string[],
      public  answer: number[]
        ){}

  }
