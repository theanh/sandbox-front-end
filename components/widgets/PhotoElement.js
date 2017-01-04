var React = require('react');

var PhotoElement = React.createClass({

	getInitialState: function() {
    return {
      myFileName: "",
      myFileHandle: {},
      currentAvatar: this.props.image,
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      myFileName: "",
      myFileHandle: {},
      currentAvatar: nextProps.image,
    });
  },

  handleChange: function(event) {
    var self = this;

    this.setState( {myFileName: event.target.files[0].name} );
    this.setState( {myFileHandle: event.target.files[0]} );

    var file = event.target.files[0];
    var name = event.target.files[0].name;
  },

  handleImageClick: function(e) {
    $("#fileInput").click();
    e.preventDefault();
  },

  render: function() {
    return (
      <div className="form-group">
        <div style={{height:0,overflow:'hidden'}}>
          <input type="file" id="fileInput" onChange={this.handleChange} name="fileInput" />
        </div>
        <div style={{width:160}} className="m-l-md m-t-sm">
          <a href="#" onClick={this.handleImageClick} className="thumbnail">
            <img src={this.state.currentAvatar} alt="Update Profile Photo" />
            <div className="imageUpdate">
              <p>{this.props.photoHelp}</p>
            </div>
          </a>
        </div>
      </div>
    )
  }
});

module.exports = PhotoElement;
