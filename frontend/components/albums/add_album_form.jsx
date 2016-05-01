var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var AlbumActions = require("../../actions/album_actions");
var AlbumStore = require("../../stores/album_store");
var Link = require('react-router').Link;


var AddAlbumForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return { title: "", description: "", image_url: "" };
  },
  componentDidMount: function() {
    this.listener = AlbumStore.addListener(this.updateErrors);
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  updateErrors: function(){
    this.setState({errors: AlbumStore.errors() });
  },

  updateView: function() {
    this.setState({ title: "", description: "" });
  },

  titleChange: function (e) {
    this.setState({ title: e.target.value });
  },

  descriptionChange: function (e) {
    this.setState({ description: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    AlbumActions.createAlbum({
      title: this.state.title,
      description: this.state.description,
      user_id: this.state.user.id
    });
  },

  errors: function(){
		if (!this.state.errors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.errors).map(function(key, i){
				return (<li key={i}>{self.state.errors[key]}</li>);
			})
		}
		</ul>);
	},

  render: function(){
    return (
      <div className="">
        {this.errors()}
        <form onSubmit={this.handleSubmit}>
          <label> Title:
            <input
              type="text"
              placeholder="Title"
              onChange={this.titleChange}
              value={this.state.title}/>
          </label>

          <br />

          <label> Description:
            <input
              type="text"
              placeholder="Description"
              onChange={this.descriptionChange}
              value={this.state.description}/>
          </label>

          <br/>

          <input type="submit" value="Add Album"/>
        </form>
      </div>
    );
  }
});

module.exports = AddAlbumForm;
