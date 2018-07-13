var React = require('react');
var PropTypes = require('prop-types');
function PlayerPreview(props) {
  console.log(props);
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
      {props.children}
    </div>
  );
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
};
module.exports = PlayerPreview;