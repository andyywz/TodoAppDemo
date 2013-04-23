// app/assets/javascript/views/sidebar_view.js
TD.Views.SidebarView = Backbone.View.extend({
  initialize: function (options) {
    var that = this;
    
    that.users = options.users;
    that.tasks = options.tasks;
    that.choice = "tasks";
    
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
  
  buttonChoices: {
    "tasks": "Tasks",
    "users": "Users"
  },
  
  render: function () {
    var that = this;

    var listContent = null;
    if (that.choice == "users") {
      listContent = JST["users/list"]({
        users: that.users
      });
    } else if (that.choice == "tasks") {
      listContent = JST["tasks/list"]({
        tasks: that.tasks
      });
    }
    
    var renderedContent = JST["sidebar"]({
      buttonChoices: that.buttonChoices,
      listContent: listContent,
      title: that.buttonChoices[that.choice]
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
