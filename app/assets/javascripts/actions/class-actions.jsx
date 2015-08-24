var classActions = {
  addItem: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_CLASS,
      data: item
    });
  },
  updateItem: function(item){
    AppDispatcher.handleAction({
      actionType: appConstants.UPDATE_CLASS,
      data: item
    });
  },
  removeItem: function(index){
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_CLASS,
      data: index
    })
  }
};
