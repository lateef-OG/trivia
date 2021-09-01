export const fetchQuestions = (amount: number, difficulty: string) => {
  return fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`
  )
};
