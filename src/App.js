import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorsDetail from "./AuthorDetail";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors
  };
  // selectAuthor = author => this.setState{ currentAuthor : author }
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };
  filterAuthors = query => {
    this.setState({
      filteredAuthors: authors.filter(author =>
        `${author.first_name} ${author.last_name}`.includes(query)
      )
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>

          <div className="content col-10">
            {this.state.currentAuthor ? (
              <AuthorsDetail author={this.state.currentAuthor} />
            ) : (
              <AuthorsList
                newfunction={this.selectAuthor}
                authors={this.state.filteredAuthors}
                filterAuthors={this.filterAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
