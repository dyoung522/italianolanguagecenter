var Header       = require('components/header'),
    Introduction = require('components/introduction'),
    PageSection  = require('components/page-section'),
    React        = require('react'),
    SectionList  = require('components/page-section-list'),
    Welcome      = require('components/welcome');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Welcome />

        <div className="main-container">
          <Introduction />
          <SectionList />
        </div>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('react-container'));
