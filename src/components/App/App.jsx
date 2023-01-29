import { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { api } from 'API';

class App extends Component {
  state = {
    items: [],
    totalHits: null,
    isModalOpen: false,
    largeImage: '',
    page: api.pageToFetch,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  SearchImages = ({ query }) => {
    const isQueryChanged = query !== api.queryToFetch;
    if (!isQueryChanged) return;

    api.queryToFetch = query;
    api.pageToFetch = 1;
    this.setState({ items: [] });
    this.fetchImages();
  };

  async fetchImages() {
    try {
      this.setState({ loading: true });

      const {
        data: { hits, totalHits },
      } = await api.fetch();

      this.setState(({ items }) => ({
        items: [...items, ...hits],
        totalHits: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    api.incrementPage();
    this.fetchImages();
  };

  openModal = id => {
    const imgUrl = this.state.items.find(item => item.id === id).largeImageURL;
    this.setState({
      largeImage: imgUrl,
      isModalOpen: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      largeImage: '',
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen, items, totalHits, loading, largeImage } = this.state;
    const { SearchImages, loadMore, openModal, onCloseModal } = this;
    const isloadMoreHidden =
      (totalHits <= items.length && !loading) || items.length < 1;

    return (
      <AppContainer>
        <Searchbar onSubmit={SearchImages} />
        <ImageGallery
          openModal={openModal}
          items={items}
          query={api.queryToFetch}
        />
        {!isloadMoreHidden && <Button loadMore={loadMore}>Load more</Button>}
        {isModalOpen && (
          <Modal
            onCloseModal={onCloseModal}
            imgUrl={largeImage}
            discription={api.queryToFetch}
          />
        )}
      </AppContainer>
    );
  }
}

export default App;
