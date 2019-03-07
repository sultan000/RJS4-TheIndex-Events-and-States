import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const bookRows = author.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>{book.length}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ));
    // const AuthorDetail = this.props.authors.map(author => ());
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {author.first_name} {author.last_name}
          </h3>
          <img src={author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
