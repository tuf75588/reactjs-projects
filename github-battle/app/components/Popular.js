var React = require("react");

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      };
    });
  }
  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        <p>selected language: {this.state.selectedLanguage}</p>
        {languages.map(function(lang, index, array) {
          return (
            <li key={index} style={lang === this.state.selectedLanguage ? {color: '#d0211b'} : null} onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}
module.exports = Popular;
