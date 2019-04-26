import axios from "axios";

export default {
  //Search for a book by title
  searchBook: (title) => {
      return axios.post("/search", {title: title});
  }
};
