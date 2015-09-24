// Model
Project = function(doc) {
  _.extend(this, doc);
};

// Collection
Projects = new Mongo.Collection("projects", {
  transform: function(doc) {
    return new Project(doc);
  }
});
