export const fetchQuestions = (amount: number, difficulty: string) => {
  return fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("An error occured. Please refresh the page.");
      }
      return res.json();
    })
    .catch((error) => ({ error: error.message }));
};
