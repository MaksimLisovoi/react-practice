import { useState, useEffect } from 'react';

import { AppBody, LoadMoreBtn, Heading, SpinnerBox } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import picturesApi from '../../services/pictures-api';
import { Loader } from 'components/Loader';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setPictures([]);
    setError(null);
  };

  const fetchPictures = () => {
    const options = { searchQuery, currentPage };

    setIsLoading(true);

    picturesApi
      .fetchPictures(options)
      .then(({ data }) => {
        setPictures(prevState => [...prevState, ...data.hits]);
        setCurrentPage(prevState => prevState + 1);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const shouldRenderLoadMoreBtn = pictures.length > 0 && !isLoading;

  return (
    <>
      {error && <Heading>Ошибка !!!</Heading>}
      <AppBody>
        <Searchbar onSubmit={onChangeQuery} />
        <ImageGallery pictures={pictures} />
        {isLoading && (
          <SpinnerBox>
            <Loader />
          </SpinnerBox>
        )}
        {shouldRenderLoadMoreBtn && (
          <LoadMoreBtn onClick={fetchPictures} type="button">
            Load more...
          </LoadMoreBtn>
        )}
      </AppBody>
    </>
  );
};

// export class App extends Component {
//   state = {
//     pictures: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//   };

//   componentDidMount() {}

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchPictures();
//     }
//   }

//   onChangeQuery = query => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       pictures: [],
//       error: null,
//     });
//   };

//   fetchPictures = () => {
//     const { currentPage, searchQuery } = this.state;
//     const options = { searchQuery, currentPage };

//     this.setState({ isLoading: true });

//     picturesApi
//       .fetchPictures(options)
//       .then(({ data }) => {
//         this.setState(prevState => ({
//           pictures: [...prevState.pictures, ...data.hits],
//           currentPage: prevState.currentPage + 1,
//         }));
//       })
//       .catch(error => this.setState({ error: error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const { pictures, isLoading, error } = this.state;
//     const shouldRenderLoadMoreBtn = pictures.length > 0 && !isLoading;

//     return (
//       <>
//         {error && <Heading>Ошибка !!!</Heading>}
//         <AppBody>
//           <Searchbar onSubmit={this.onChangeQuery} />
//           <ImageGallery pictures={pictures} />
//           {isLoading && (
//             <SpinnerBox>
//               <ColorRing
//                 visible={true}
//                 height="100"
//                 width="100"
//                 ariaLabel="blocks-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="blocks-wrapper"
//                 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//               />
//             </SpinnerBox>
//           )}
//           {shouldRenderLoadMoreBtn && (
//             <LoadMoreBtn onClick={this.fetchPictures} type="button">
//               Load more...
//             </LoadMoreBtn>
//           )}
//         </AppBody>
//       </>
//     );
//   }
// }
