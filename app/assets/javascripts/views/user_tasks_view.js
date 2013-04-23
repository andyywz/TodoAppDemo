TD.Views.UserTasksView = Backbone.View.extend({
  render: function () {
    var that = this;
        
    var tasks = new TD.Collections.UserTasks([], {
      userId: that.model.id
    });
    
    tasks.fetch({
      success: function () {
        var renderedContent = JST["users/tasks"]({
          tasks: tasks
        });
        
        that.$el.html(renderedContent);
      }
    });
    
    return that;
  }
});
