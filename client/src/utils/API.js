import axios from "axios";

export default {
  //Search for a book by title
  searchBook: (title) => {
      return axios.post(`/search/${title}`);
  },

  saveBook: (bookData) => {
    return axios.post(`/saved/${bookData.id}`);
  },

  findBook: () => {
    return axios.post("/saved");
  },

  deleteBook: (id) => {
    return axios.post(`/delete/${id}`);
  }
};
