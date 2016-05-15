var React = require('react');
var CurrentUserState = require("../../mixins/current_user_state");
var HashHistory = require('react-router').hashHistory;
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");

var PhotoInformation = React.createClass({
  // mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      editing: false,
      photo: this.props.photo,
      title: this.props.photo.title,
      description: this.props.photo.description
    };
  },

  componentDidMount: function() {
    this.listener = PhotoStore.addListener(this.updateView);
  },

  updateView: function() {
    var updatedPhoto = PhotoStore.photoDetail(this.props.photo.id);
    this.setState({
      title: updatedPhoto.title,
      description: updatedPhoto.description,
      editing: false
    });
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    var newPhoto = newProps.photo;
    this.setState({
      photo: newPhoto,
      title: newPhoto.title,
      description: newPhoto.description
    });
  },
  photoTitle: function() {
    var title = this.state.photo.title;
    if (title === "") { title = "untitled"; }
    return <p>{title}</p>;
  },
  photoDescription: function() {
    var description = this.state.photo.description;

    return <p>{description}</p>;
  },
  renderInformation: function() {
    return (
      <div className="photo-information">
        {this.photoTitle()}
        {this.photoDescription()}
      </div>
    );
  },
  titleChange: function(e) {
    this.setState( {title: e.target.value} );
  },
  descriptionChange: function(e) {
    this.setState( {description: e.target.value} );
  },
  submitUpdatedPhoto: function() {

    PhotoActions.updatePhoto({
      id: this.props.photo.id,
      title: this.state.title,
      description: this.state.description
    });

    this.setState({ editing: false });
  },

  renderEditForm: function() {
    return (
      <div>
        <form className="form">
          <section>
            <label> Title:
              <input
                type="text"
                onChange={this.titleChange}
                value={this.state.title}/>
            </label>
            <br/>

            <label> Description:
              <input
                type="text"
                onChange={this.descriptionChange}
                value={this.state.description}/>
            </label>
          </section>
        </form>
      </div>
    );
  },
  isBeingEditted: function() {
    if (this.state.editing) {
      return this.renderEditForm();
    } else {
      return this.renderInformation();
    }
  },
  toggleEdit: function (e) {
    e.preventDefault();

    if (this.state.editing) {
      this.setState({ editing: false });
      this.submitUpdatedPhoto();
    } else {
      this.setState({ editing: true });
    }
  },
  editButton: function() {
    if (this.state.editing) {
      return <div className="edit-button" onClick={this.toggleEdit} >Save Changes</div>;
    } else {
      return <div className="edit-button" onClick={this.toggleEdit} >Edit</div>;
    }
  },
  currentUser: function() {
    if (!this.props.user) { return; }
    var currentSiteUsername = this.props.username;
    var currentUsername = this.props.user.username;
    if (currentSiteUsername === currentUsername) {
      return true;
    }
  },
  canEdit: function() {
    if (this.currentUser()) {
      return (
        <div className="form-boundary">
          {this.isBeingEditted()}
          {this.editButton()}
        </div>
      );
    } else {
      return this.renderInformation();
    }
  },

  render: function(){
    return (
      <div className="photo-detail-information shown-on-mouse-move">
        {this.canEdit()}
      </div>
    );
  }
});

module.exports = PhotoInformation;
