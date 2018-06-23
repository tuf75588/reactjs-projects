var React = require("react");
var PropTypes = require("prop-types");
var Link = require("react-router-dom").Link;
var getProfile = require('../utils/api').getProfile;
function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img
          src={props.avatar}
          className="avatar"
          alt={"avatar for" + props.username}
        />
        <h2>@{props.username}</h2>
      </div>
      <button
        className="reset"
        type="submit"
        onClick={props.onReset.bind(null, props.id)}
      >
        Reset
      </button>
    </div>
  );
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        username: value
      };
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="github username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <button
          type="submit"
          className="button"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  }
  handleReset(id) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;
      return newState;
    });
  }

  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;
    console.log(match);
    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerOneImage !== null && (
            <PlayerPreview
              id="playerOne"
              username={playerOneName}
              avatar={playerOneImage}
              onReset={this.handleReset}
            />
          )}
          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerTwoImage !== null && (
            <PlayerPreview
              id="playerTwo"
              username={playerTwoName}
              avatar={playerTwoImage}
              onReset={this.handleReset}
            />
          )}
        </div>
        <div>
          {playerOneImage &&
            playerTwoImage && (
              <Link
                className="button"
                to={{
                  pathname: match.url + "/results",
                  search:
                    "?playerOneName=" +
                    playerOneName +
                    "&playerTwoName=" +
                    playerTwoName
                }}
              >
                Battle!
              </Link>
            )}
        </div>
      </div>
    );
  }
}

module.exports = Battle;
