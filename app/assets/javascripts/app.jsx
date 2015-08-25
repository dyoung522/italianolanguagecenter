var React = require('react'),
    Header = require('components/header'),
    Welcome = require('components/welcome'),
    Introduction = require('components/introduction'),
    PageSection = require('components/page-section'),
    ClassListContainer = require('components/class-list-container');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Welcome />
        <div className="main-container">
          <Introduction />
          <ClassListContainer />
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
