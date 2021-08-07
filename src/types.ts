export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionsInitialState {
  amount: number;
  difficulty: string;
  questions: Question[];
  loading: boolean;
}

export interface Answer {
  question: string;
  correct_answer: string;
  chosen_answer: string;
}

export interface AnswersInitialState {
    answers: Answer[]
}
