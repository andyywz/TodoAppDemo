// app/assets/javascript/todo.js
window.TD = {
  // we'll eventually store Backbone classes inside of these namespaces
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function (rootEl, initialTasks) {
    // we'll call D.initialize(rootEl, initialTasks)from our HTML to
    // kick-off the JS client code.
    
    var tasksListView = new TD.Views.TasksListView({
      collection: initialTasks
    });
    
    $(rootEl).html(tasksListView.render().$el);
  }
};
