// app/assets/javascript/views/tasks_list_view.js
TD.Views.TasksListView = Backbone.View.extend({
  events: {
    "click li.task": "showTask"
  },
  
  render: function () {
    var that = this;
    
    var renderedContent = JST["tasks/list"]({
      tasks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },
  
  showTask: function (el) {
    console.log(
      "You clicked task #" +
        $(el.target).attr("data-id") +
        "! So good a click!"
    );
  }
});
