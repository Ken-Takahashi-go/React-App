import axios from "axios";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

class QuizFetcher {
  static async fetch() {
    const response = await axios.get(API_URL);
    return response.data;
  }
}

export default QuizFetcher;
