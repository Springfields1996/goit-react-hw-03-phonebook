import React from 'react';
import axios from 'axios';
import { Search } from '../Search/Search';
import { NewsList } from '../NewsList/NewsList';

axios.defaults.baseURL = 'http://newsapi.org/v2';

export class News extends React.Component {
  state = {
    query: '',
    news: [],
  };

  getNews = async (query = 'apple') => {
    try {
      const news = await axios.get(
        `/everything?q=${query}&from=2020-08-08&sortBy=publishedAt&apiKey=${process.env.REACT_APP_ENV_API_KEY}`,
      );
      this.setState({ news: news.data.articles });
    } catch (error) {
      console.log(error);
    }
  };

  // static getDerivedStateFromProps(state, props) {
  //   return { page: 2 };
  // }

  componentDidMount() {
    this.getNews();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('state', prevState);
    prevState.query !== this.state.query && this.getNews(this.state.query);
  }

  getQuery = query => this.setState({ query });

  render() {
    const { news } = this.state;
    return (
      <>
        <h2>News</h2>
        <Search getQuery={this.getQuery} />
        <NewsList data={news} />
      </>
    );
  }
}
