// app/assets/javascript/views/sidebar_view.js
TD.Views.SidebarView = Backbone.View.extend({
  initialize: function (options) {
    var that = this;
    
    that.users = options.users;
    that.tasks = options.tasks;
  },
  
  events: {
    "click button.tasks": "renderTasks",
    "click button.users": "renderUsers"
  },
  
  render: function (choice) {
    var that = this;
    
    var buttonChoices = {
      "tasks": "Tasks",
      "users": "Users"
    };
    
    var listContent = null;
    if (choice == "tasks") {
      listContent = JST["users/list"]({
        users: that.users
      });
    } else if (choice == "users") {
      listContent = JST["tasks/list"]({
        buttonChoices: buttonChoices,
        tasks: that.tasks
      });
    }
    
    var renderedContent = JST["sidebar"]({
      buttonChoices: buttonChoices,
      listContent: listContent,
      title: buttonChoices[choice]
    });

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
