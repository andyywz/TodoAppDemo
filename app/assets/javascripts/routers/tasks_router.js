// app/assets/javascripts/routers/tasks_router.js
TD.Routers.TasksRouter = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },
  
  routes: {
    "": "index",
    "tasks/new": "new",
    "tasks/:id": "show",
    "users/:id/tasks": "indexUserTasks"
  },
  
  index: function () {
    var that = this;
    
    that.$rootEl.empty();
  },
  
  new: function () {
    var that = this;
    
    var newTaskView = new TD.Views.NewTaskView({
      collection: TD.Store.Tasks,
      model: new TD.Models.Task()
    });
    
    that.$rootEl.html(newTaskView.render().$el);
  },
  
  show: function (id) {
    var that = this;
    
    var task = TD.Store.Tasks.get(id);
    var taskDetailView = new TD.Views.TaskDetailView({
      model: task
    });
    
    that.$rootEl.html(taskDetailView.render().$el);
  },
  
  indexUserTasks: function (userId) {
    var that = this;

    var user = TD.Store.Users.get(userId);
    var userTasksView = new TD.Views.UserTasksView({ model: user });
    
    user.get("tasks").fetch()
      .then(function (results) {
        that.$rootEl.html(userTasksView.render().$el);        
      });
  }
});
