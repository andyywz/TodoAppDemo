// app/assets/javascripts/routers/tasks_router.js
TD.Routers.TasksRouter = Backbone.Router.extend({
  initialize: function ($rootEl, tasks) {
    this.$rootEl = $rootEl;
    this.tasks = tasks;
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
      collection: that.tasks
    });
    
    that.$rootEl.html(newTaskView.render().$el);
  },
  
  show: function (id) {
    var that = this;
    
    var task = that.tasks.get(id);
    var taskDetailView = new TD.Views.TaskDetailView({
      model: task
    });
    
    that.$rootEl.html(taskDetailView.render().$el);
  },
  
  indexUserTasks: function (userId) {
    var that = this;
    
    var user = new TD.Models.User({ id: userId });
    var userTasksView = new TD.Views.UserTasksView({ model: user });
    
    async.parallel([
      function (callback) {
        user.fetch({
          success: function () { callback(null, null) }
        });
      },
      
      function (callback) {
        user.get("tasks").fetch({
          success: function () { callback(null, null) }
        });
      }],
      
      function (errors, results) {
        that.$rootEl.html(userTasksView.render().$el);
      }
    );
  }
});
