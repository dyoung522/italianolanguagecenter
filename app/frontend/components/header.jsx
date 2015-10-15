import React    from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
  changeLocale: function(locale) {
    return function() { I18n.locale = locale; };
  },

  _onPageScrollClick: function(event) {
    var anchor = ReactDOM.findDOMNode(event.target);

    $('html, body').stop().animate({
      scrollTop: $(anchor.getAttribute('href')).offset().top
    }, 500, 'easeInOutExpo');

    event.preventDefault();
  },

  // TODO: Refactor this using React (esp. for sections)
  // TODO: Add language selection links
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll"
               onClick={this._onPageScrollClick}
               href="#page-top">
              Italiano Language Center
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a className="page-scroll" href="#page-top" />
              </li>
              <li><a onClick={this._onPageScrollClick} href="#welcome">{I18n.t('menu.intro')}</a></li>
              <li><a onClick={this._onPageScrollClick} href="#classes">{I18n.t('menu.classes')}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a className="login" href="#login">{I18n.t('menu.login')}</a></li>
              <li>
                <a type="button" className="language-flag" href="?locale=en" onClick={this.changeLocale('en')}>
                  <img src="/assets/english-flag.png" alt="english"/>
                </a>
              </li>
              <li>
                <a type="button" className="language-flag" href="?locale=it" onClick={this.changeLocale('it')}>
                  <img src="/assets/italian-flag.png" alt="italiano"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

});

export default Header;