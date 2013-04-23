// app/assets/javascript/todo.js
window.TD = {
  // we'll eventually store Backbone classes inside of these namespaces
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},
  
  initialize: function ($sidebar, $content, tasksData, usersData) {
    TD.Store.Tasks = new TD.Collections.Tasks(tasksData);
    TD.Store.Users = new TD.Collections.Users(usersData);

    this.installSidebar($sidebar);
    
    // startup a router
    new TD.Routers.TasksRouter($content);
    // begin listening for navigation events
    Backbone.history.start();
  },
  
  installSidebar: function ($sidebar) {
    var that = this;
    
    var sidebarView = new TD.Views.SidebarView({
      tasks: TD.Store.Tasks,
      users: TD.Store.Users
    });
    
    $sidebar.html(sidebarView.render("tasks").$el);
  }
};
