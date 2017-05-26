import React from 'react';
import MovieReviews from './MovieReviews';
import SearchInput from './SearchInput';
import { fetch } from 'whatwg-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){

  }

  handleSubmit(ev){
    const { searchTerm } = this.state;
    ev.preventDefault();
    fetch(BASE_URL.concat(searchTerm))
      .then(res => res.json())
      .then(res => this.setState({
        reviews: res.results
      }));

  }

  handleInputChange(ev){
    this.setState({
      searchTerm: ev.target.value
    })
  }

  render(){
    const { reviews } = this.state;

    return (
      <div className='searchable-movie-reviews'>
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}
