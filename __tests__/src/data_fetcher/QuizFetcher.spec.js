import QuizFetcher from "./../../../src/data_fetcher/QuizFetcher";

describe("QuizFetcherのテスト", () => {
  it("10ケンのクイズデータが入る", async () => {
    const data = await QuizFetcher.fetch();

    expect(Array.isArray(data.results)).toStrictEqual(true);
    expect(data.results.length).toStrictEqual(10);
    data.results.forEach(quiz => {
      expect(typeof quiz.category).toStrictEqual("string");
      expect(typeof quiz.type).toStrictEqual("string");
      expect(typeof quiz.difficulty).toStrictEqual("string");
      expect(typeof quiz.question).toStrictEqual("string");
      expect(typeof quiz.correct_answer).toStrictEqual("string");
    });
  });
});
