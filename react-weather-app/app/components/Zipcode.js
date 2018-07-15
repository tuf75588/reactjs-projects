var React = require("react");
var PropTypes = require("prop-types");
var ReactRouter = require('react-router-dom')
var api = require("../../utils/api");
class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
  }

  handleSubmitZipcode() {
    this.props.onSubmitZipcode(this.state.zipcode)
  }
  handleUpdateZipcode(e) {
    const zip = e.target.value;
    this.setState(function() {
      return {
        zipcode: zip
      };
    }.bind(this));
  }
  render() {
    return (
      <div
        className="zipcode-container"
        style={{ flexDirection: this.props.direction }}
      >
        <input
          className="form-control"
          onChange={this.handleUpdateZipcode}
          placeholder="San Francisco, California"
          type="text"
          value={this.state.zipcode}
        />
        <button
          type="button"
          style={{ margin: 10 }}
          className="btn btn-success"
          onClick={this.handleSubmitZipcode}
        >
          Get Weather
        </button>
      </div>
    );
  }
}

ZipCode.defaultProps = {
  direction: "column"
};

ZipCode.propTypes = {
  direction: PropTypes.string,

};

module.exports = ZipCode;
