import axios from 'axios';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 19973249-c52aafd5b7bc4f65352a2c6d7';

const fetchPictures = ({ searchQuery, currentPage = 1, perPage = 5 }) => {
  return axios.get(
    `https://pixabay.com/api/?key=19973249-c52aafd5b7bc4f65352a2c6d7&q=${searchQuery}&image_type=photo&per_page=${perPage}&page=${currentPage}`,
  );
};

const picturesApi = {
  fetchPictures,
};

export default picturesApi;
