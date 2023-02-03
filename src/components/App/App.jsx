import { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Message from 'components/Message';
import fetchImages from 'API';

const App = () => {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('Enter the query to search!');

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);

        if (!query) return;
        setMessage('');

        {
          const {
            data: { hits, totalHits },
          } = await fetchImages(query, page);

          if (hits.length < 1) {
            setMessage(
              'The search result is incorrect. Please enter quary and try again.'
            );
            return;
          }
          setItems(prevItems => [
            ...prevItems,
            ...hits.map(({ largeImageURL, webformatURL, id }) => ({
              largeImageURL,
              webformatURL,
              id,
            })),
          ]);
          setTotalCount(totalHits);
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  const SearchImages = queryToSearch => {
    const isQueryChanged = queryToSearch !== query;
    if (!isQueryChanged) return;
    setQuery(queryToSearch);
    setPage(1);
    setItems([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = id => {
    const imgUrl = items.find(item => item.id === id).largeImageURL;
    setLargeImage(imgUrl);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setLargeImage('');
    setIsModalOpen(false);
  };

  const isloadMoreHidden =
    totalCount <= items.length || loading || items.length < 1;

  return (
    <AppContainer>
      <Searchbar onSubmit={SearchImages} />

      {items.length < 1 ? (
        <Message message={message} />
      ) : (
        <ImageGallery openModal={openModal} items={items} query={query} />
      )}

      {loading && <Loader />}
      {!isloadMoreHidden && <Button loadMore={loadMore}>Load more</Button>}
      {isModalOpen && (
        <Modal
          onCloseModal={onCloseModal}
          imgUrl={largeImage}
          discription={query}
        />
      )}
    </AppContainer>
  );
};

export default App;
