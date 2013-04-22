// app/assets/javascripts/routers/tasks_router.js
TD.Routers.TasksRouter = Backbone.Router.extend({
  initialize: function (rootEl, initialTasks) {
    this.$rootEl = $(rootEl);
    this.initialTasks = initialTasks;
  },
  
  routes: {
    "": "index",
    "tasks/:id": "show"
  },
  
  index: function () {
    var that = this;
    
    var tasksListView = new TD.Views.TasksListView({
      collection: that.initialTasks
    });
    
    that.$rootEl.html(tasksListView.render().$el);
  },
  
  show: function (id) {
    console.log("I'm just getting warmed up!");
  }
});
