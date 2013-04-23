// app/assets/javascript/views/users_list_view.js
TD.Views.UsersListView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    var renderCallback = that.render.bind(that);
    that.collection.on("add", renderCallback);
    that.collection.on("change", renderCallback);
    that.collection.on("remove", renderCallback);
  },
  
  render: function () {
    var that = this;
    
    var renderedContent = JST["users/list"]({
      tasks: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});
