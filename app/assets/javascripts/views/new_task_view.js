// app/assets/javascript/views/new_task_view.js
TD.Views.NewTaskView = Backbone.View.extend({
  events: {
    "click button": "save"
  },
  
  render: function () {
    var that = this;
    
    var renderedContent = JST["tasks/new"]();
    that.$el.html(renderedContent);
    return that;
  },
  
  save: function () {
    var that = this;
    
    var task = new TD.Models.Task({
      title: that.$("input[name=task\\[title\\]]").val()
    });
    
    that.collection.add(task);
    Backbone.history.navigate("#/");
  }
});
