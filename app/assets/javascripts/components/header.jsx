var React = require('react');

var Header = React.createClass({
  _onPageScrollClick: function(event) {
    var anchor = React.findDOMNode(event.target);

    $('html, body').stop().animate({
      scrollTop: $(anchor.getAttribute('href')).offset().top
    }, 500, 'easeInOutExpo');

    event.preventDefault();
  },

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
                <a className="page-scroll" href="#page-top"></a>
              </li>
              <li><a onClick={this._onPageScrollClick} href="#welcome">{I18n.t('menu.intro')}</a></li>
              <li><a onClick={this._onPageScrollClick} href="#classes">{I18n.t('menu.classes')}</a></li>
              <li><a onClick={this._onPageScrollClick} href="#events">{I18n.t('menu.events')}</a></li>
              <li><a onClick={this._onPageScrollClick} href="#more">{I18n.t('menu.more')}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="login" href="#login">{I18n.t('menu.login')}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

});

module.exports = Header;