// app/assets/javascript/views/new_task_view.js
TD.Views.NewTaskView = Backbone.View.extend({
  events: {
    "click button.submit": "submit",
    "click button.cancel": "cancel"
  },
  
  render: function () {
    var that = this;
    
    var renderedContent = JST["tasks/new"]();
    that.$el.html(renderedContent);
    return that;
  },
  
  submit: function () {
    var that = this;
    
    that.model.set({
      title: that.$("input[name=task\\[title\\]]").val()
    });
    
    that.collection.add(that.model);
    that.model.save();
    Backbone.history.navigate("#/");
  },
  
  cancel: function () {
    Backbone.history.navigate("#/");
  }
});
