// app/assets/javascript/views/sidebar_view.js
TD.Views.SidebarView = Backbone.View.extend({
  initialize: function (options) {
    var that = this;
    
    that.users = options.users;
    that.tasks = options.tasks;
  },
  
  events: {
    "click a.tasks": "renderTasks",
    "click a.users": "renderUsers"
  },
  
  render: function (choice) {
    var that = this;
    
    var buttonChoices = {
      "tasks": "Tasks",
      "users": "Users"
    };
    
    var renderedContent = null;
    if (choice == "tasks") {
      renderedContent = JST["users/list"]({
        users: that.users
      });
    } else if (choice == "users") {
      renderedContent = JST["tasks/list"]({
        buttonChoices: buttonChoices,
        tasks: that.tasks
      });
    }

    that.$el.html(renderedContent);
    return that;
  },

  renderTasks: function () {
    var that = this;
    
    that.render("tasks");
  },
  
  renderUsers: function () {
    var that = this;
    
    that.render("users");
  }
});
