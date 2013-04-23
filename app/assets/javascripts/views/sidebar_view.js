// app/assets/javascript/views/sidebar_view.js
TD.Views.SidebarView = Backbone.View.extend({
  initialize: function (options) {
    var that = this;
    
    that.users = options.users;
    that.tasks = options.tasks;
    that.choice = "users";
    
    that.users.on("add", that.render, that);
    that.users.on("change", that.render, that);
    that.users.on("remove", that.render, that);
    
    that.tasks.on("add", that.render, that);
    that.tasks.on("change", that.render, that);
    that.tasks.on("remove", that.render, that);
  },
  
  events: {
    "click button.tasks": "renderTasks",
    "click button.users": "renderUsers"
  },
  
  render: function () {
    var that = this;
    
    var buttonChoices = {
      "tasks": "Tasks",
      "users": "Users"
    };
    
    var listContent = null;
    if (that.choice == "users") {
      listContent = JST["users/list"]({
        users: that.users
      });
    } else if (that.choice == "tasks") {
      listContent = JST["tasks/list"]({
        buttonChoices: buttonChoices,
        tasks: that.tasks
      });
    }
    
    var renderedContent = JST["sidebar"]({
      buttonChoices: buttonChoices,
      listContent: listContent,
      title: buttonChoices[that.choice]
    });

    that.$el.html(renderedContent);
    return that;
  },

  renderTasks: function () {
    var that = this;
    
    that.choice = "tasks";
    that.render();
  },
  
  renderUsers: function () {
    var that = this;
    
    that.choice = "users";
    that.render("users");
  }
});
