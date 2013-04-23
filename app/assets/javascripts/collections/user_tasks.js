TD.Collections.UserTasks = Backbone.Collection.extend({
  model: TD.Models.Task,

  initialize: function (models, options) {
    this.userId = options.userId;
  },
  
  url: function () {
    return "/users/" + this.userId + "/tasks"
  }
});
