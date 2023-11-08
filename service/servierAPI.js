import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/";

export const getNews = async () => {
  try {
    const result = await axios.get("news");
    return result.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
