import axios from "axios";

// axios.defaults.baseURL = "https://sport-school-server.onrender.com/api/";
axios.defaults.baseURL = "http://localhost:3001/api/";

export const getNews = async (page = 1, old = "false", perPage = 4) => {
  try {
    const result = await axios.get("news", {
      params: {
        old,
        page,
        perPage,
      },
    });
    return result.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
