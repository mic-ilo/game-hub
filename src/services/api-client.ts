import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8e0354fb0d8b49869a96fbfaf198514a",
  },
});
