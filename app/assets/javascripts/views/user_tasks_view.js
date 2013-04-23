TD.Views.UserTasksView = Backbone.View.extend({
  render: function () {
    var that = this;
    
    var renderedContent = JST["users/tasks"]({
      user: that.model
    });
    that.$el.html(renderedContent);
    return that;
  }
});
