// app/assets/javascripts/routers/tasks_router.js
TD.Routers.TasksRouter = Backbone.Router.extend({
  initialize: function (rootEl, tasks) {
    this.$rootEl = $(rootEl);
    this.tasks = tasks;
  },
  
  routes: {
    "": "index",
    "tasks/new": "new",
    "tasks/:id": "show"
  },
  
  index: function () {
    var that = this;
    
    var tasksListView = new TD.Views.TasksListView({
      collection: that.tasks
    });
    
    that.$rootEl.html(tasksListView.render().$el);
  },
  
  new: function () {
    var that = this;
    
    var newTaskView = new TD.Views.NewTaskView();
    that.$rootEl.html(newTaskView.render().$el);
  },
  
  show: function (id) {
    var that = this;
    
    var task = _(that.tasks).find(function (task) {
      return task.id == id;
    });
    
    var taskDetailView = new TD.Views.TaskDetailView({
      model: task
    });
    
    that.$rootEl.html(taskDetailView.render().$el);
  }
});
