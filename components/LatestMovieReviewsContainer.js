import React from 'react';
import MovieReviews from './MovieReviews';
import { fetch } from 'whatwg-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`

export default class LatestMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
      .then(res => res.json())
      .then(res => this.setState({
        reviews: res.results
      }));
  }

  render(){
    const { reviews } = this.state;

    return (
      <div className='latest-movie-reviews'>
        <h2>The Latest Movie Revies</h2>
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}
