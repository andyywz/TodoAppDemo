// app/assets/javascript/todo.js
window.TD = {
  // we'll eventually store Backbone classes inside of these namespaces
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function (rootEl, initialTasks) {
    // startup a router
    new TD.Routers.TasksRouter(rootEl, initialTasks);
    // begin listening for navigation events
    Backbone.history.start();
  }
};
