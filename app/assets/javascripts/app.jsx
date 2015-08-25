var React = require('react');
var Header = require('components/header');
var Welcome = require('components/welcome');
var Introduction = require('components/introduction');
var PageSection = require('components/page-section');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Welcome />
        <div className="main-container">
          <Introduction />
          <PageSection id="classes">
            <div className="text-center"><h2>Everything for classes would go here</h2></div>
          </PageSection>
          <PageSection id="events">
            <div className="text-center"><h2>Everything for Events would go here</h2></div>
          </PageSection>
          <PageSection id="other">
            <div className="text-center"><h2>Add as many sections as are needed</h2></div>
          </PageSection>
        </div>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('react-container'));
