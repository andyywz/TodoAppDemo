// app/assets/javascripts/models/user.js
TD.Collections.UserTasks = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.userId = options.userId;
  },
  
  url: function () {
    return "/users/" + this.userId + "/tasks";
  }
});

TD.Models.User = Backbone.RelationalModel.extend({
  urlRoot: "/users",
  
  relations: [{
    type: Backbone.HasMany,
    key: "tasks",
    relatedModel: "TD.Models.Task",
    collectionType: "TD.Collections.UserTasks",
    
    collectionOptions: function (user) {
      return { userId: user.id };
    },
    
    reverseRelation: {
      key: "user_id",
    }
  }]
});