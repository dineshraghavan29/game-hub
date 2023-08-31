import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c3f13680dd246c3b6d3c77950411e04",
  },
});
