// app/assets/javascripts/models/user.js
TD.Models.User = Backbone.RelationalModel.extend({
  urlRoot: "/users",
  
  relations: [{
    type: Backbone.HasMany,
    key: "tasks",
    // includeInJSON: false,
    relatedModel: "TD.Models.Task",
    collectionType: "TD.Collections.UserTasks",
    
    collectionOptions: function (user) {
      return { user: user };
    },
    
    reverseRelation: {
      key: "user",
      keySource: "user_id",
      includeInJSON: "id"
    }
  }],
  
  full_name: function () {
    var that = this;
    
    return that.escape("fname") + " " + that.escape("lname");
  }
});
