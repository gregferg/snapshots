var React = require('react');
var PhotoActions = require("../../actions/photo_actions");
var PhotoStore = require("../../stores/photo_store");



var PhotoEditForm = React.createClass({
  getInitialState: function() {
    return { title: this.props.photo.title, description:this.props.photo.title};
  },

  titleChange: function(e) {
    this.setState({ title: e.target.value });
  },

  descriptionChange: function(e) {
    this.setState({ description: e.target.value });
  },

  render: function(){
    return (
      <div className="photo-edit-form">
        <form onSubmit={this.handleSubmit} className="form">
					<section>
						<label> Title:
							<input
                type="text"
                placeholder="untitled"
                onChange={this.titleChange}
                value={this.state.title}/>
						</label>
						<br/>

						<label> Description:
							<input
                type="text"
                placeholder="description"
                onChange={this.descriptionChange}
                value={this.state.description}/>
						</label>
					</section>
					<br/>

					<input type="Submit" value="Update Photo"/>
				</form>
      </div>
    );
  }
});

module.exports = PhotoEditForm;
