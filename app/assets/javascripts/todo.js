// app/assets/javascript/todo.js
window.TD = {
  // we'll eventually store Backbone classes inside of these namespaces
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function (rootEl, tasks) {
    // startup a router
    new TD.Routers.TasksRouter(rootEl, tasks);
    // begin listening for navigation events
    Backbone.history.start();
  }
};
