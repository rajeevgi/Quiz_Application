export interface Question {
    questionText: string;
    options: string[];
    correctAnswer: string;
  }
  
  export class Quiz {
    id : string;
    title: string;
    questions: Question[];
    createdBy: string;
  
    constructor() {
      this.id = '';
      this.title = '';
      this.questions = [];
      this.createdBy = '';
    }
  }
  