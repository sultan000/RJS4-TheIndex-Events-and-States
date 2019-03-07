import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard
        seconedFunction={this.props.newfunction}
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.newfunction}
      />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar filterAuthors={this.props.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
