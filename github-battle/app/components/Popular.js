var React = require("react");
var PropTypes = require("prop-types");
var api = require("../utils/api");

function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map(function(lang, index, array) {
        return (
          <li
            key={index}
            style={
              lang === props.selectedLanguage ? { color: "#d0211b" } : null
            }
            onClick={props.onSelect.bind(null, lang)}
          >
            {lang}
          </li>
        );
      }, this)}
    </ul>
  );
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    api.fetchPopularRepos(this.state.selectedLanguage).then(function(repos) {
      console.log(repos)
    })
  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      };
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
      </div>
    );
  }
}
SelectLanguage.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired
};
module.exports = Popular;
