var PageSection = React.createClass({
  render: function() {
    return (
      <section id={this.props.id} className={this.props.id + "-section page-section"}>
        <div className="container">
          <div className="row">
            <div>
              <h1 className="title">{I18n.t('menu.' + this.props.id)}</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    )
  }
});
