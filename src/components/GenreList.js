import React, { Component } from "react";
import GenreCard from "./GenreCard";
import "./GenreList.css";
import { connect } from "react-redux";
import { fetchGenres } from "../redux/actions";

class GenreList extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    return (
      <div className="genre-list">
        {this.props.genres.map((genre) => (
          <GenreCard genre={genre} key={genre.id} />
        ))}
      </div>
    );
  }
}

GenreList.defaultProps = {
  genres: [],
};

const mapStateToProps = (state) => {
  return {
    genres: state.genres.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
