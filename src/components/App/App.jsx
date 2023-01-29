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
    page: api.pageToFetch,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPosts();
    }
  }

  SearchImages = ({ query }) => {
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

  render() {
    const { isModalOpen, items, totalHits, loading } = this.state;
    const { SearchImages, loadMore } = this;
    const isloadMoreHidden =
      (totalHits <= items.length && !loading) || items.length < 1;
    console.log('isloadMoreHidden', isloadMoreHidden);
    return (
      <AppContainer>
        <Searchbar onSubmit={SearchImages} />
        <ImageGallery items={items} query={api.queryToFetch} />
        {!isloadMoreHidden && <Button loadMore={loadMore}>Load more</Button>}
        {isModalOpen && <Modal />}
      </AppContainer>
    );
  }
}

export default App;
