var React = require("react");
var PropTypes = require("prop-types");

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(
        this.props.id,
        this.state.username,
    )
  }
  handleChange(e) {
    var target = e.target.value;
    this.setState(function() {
      return {
        username: target
      };
    });
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label htmlFor="username">{this.props.lable}</label>
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
  lable: PropTypes.string.isRequired,
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
  }
  handleSubmit(id,username) {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState
  } 

  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              lable="Player One"
              onSubmit={this.handleSubmit}
            />
          )}
          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              lable="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}

module.exports = Battle;
