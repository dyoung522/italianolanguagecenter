var React = require('react');
var classStore = require('stores/class-store');

var ClassListContainer = React.createClass({

  getInitialState: function(){
    return {
      data: classStore.getList()
    }
  },

  componentDidMount: function(){
    classStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    classStore.removeChangeListener(this._onChange);
  },

  handleAddItem: function(newItem){
    classActions.addItem(newItem);
  },

  handleUpdateItem: function(item){
    classActions.updateItem(item);
  },

  handleRemoveItem: function(index){
    classActions.removeItem(index);
  },

  _onChange: function(){
    this.setState({
      data: classStore.getList()
    })
  },

  render: function(){
    return (
      <section id='classes' className='classes-section page-section'>
        <div className="col-sm-6 col-md-offset-3">
          <div className="col-sm-12">
            <h3 className="text-center"> Class List </h3>
            {/*
              <AddItem add={this.handleAddItem}/>
              <ClassList items={this.state.data} update={this.handleUpdateItem} remove={this.handleRemoveItem}/>
             */}
          </div>
        </div>
      </section>
    )
  }
});

module.exports = ClassListContainer;
