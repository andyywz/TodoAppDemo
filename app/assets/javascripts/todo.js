window.TD = {
  // we'll eventually store Backbone classes inside of these namespaces
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function (rootEl, initialTasks) {
    // we'll call D.initialize(rootEl, initialTasks)from our HTML to
    // kick-off the JS client code.
    
    console.log("Acheivement Unlocked: JS Client Code Runs!")
    console.log(initialTasks);
  }
};
