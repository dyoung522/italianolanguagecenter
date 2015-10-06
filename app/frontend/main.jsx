var Header        = require('components/header'),
    React         = require('react'),
    SectionList   = require('components/page-section-list'),
    Welcome       = require('components/welcome'),
    WelcomeHeader = require('components/welcome-header');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <WelcomeHeader />

        <div className="main-container">
          <Welcome />
          <SectionList />
        </div>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('react-container'));
