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
    console.log("So I hear you like saving models");
  }
});
