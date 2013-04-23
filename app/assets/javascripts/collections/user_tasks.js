TD.Collections.UserTasks = Backbone.Collection.extend({
  model: TD.Models.Task,

  initialize: function (models, options) {
    this.user = options.user;
  },
  
  url: function () {
    return "/users/" + this.user.id + "/tasks"
  }
});
