import Header        from './components/header.jsx';
import React         from 'react';
import ReactDOM      from 'react-dom';
import SectionList   from './components/page-section-list.jsx';
import Welcome       from './components/welcome.jsx';
import WelcomeHeader from './components/welcome-header.jsx';

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

ReactDOM.render(<App />, document.getElementById('react-container'));
