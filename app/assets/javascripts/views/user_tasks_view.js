TD.Views.UserTasksView = Backbone.View.extend({
  render: function () {
    var that = this;
    
    that.model.get("tasks").fetch({
      success: function () {
        var renderedContent = JST["users/tasks"]({
          tasks: that.model.get("tasks")
        });
        
        that.$el.html(renderedContent);
      }
    });
    
    return that;
  }
});
