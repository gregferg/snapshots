var React = require('react');



var SearchBar = React.createClass({
  getInitialState: function() {
    return { search: "" };
  },
  handleChange: function(e) {
    this.setState({ search: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  },
  render: function(){
    return (
      <div className="search_bar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            onChange={this.handleChange}
            value={this.state.search} />
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
