// Model
Company = function(doc) {
  _.extend(this, doc);
};

_.extend(Company.prototype, {
  // Returns Company Projects
  getProjects: function() {
    return Projects.find({ companyId: this._id });
  },
  // Check for Projects
  hasProjects: function() {
    return this.getProjects().count() > 0;
  },
  // Count Projects
  projectCount: function() {
    return this.getProjects().count();
  },
});

// Collection
Companies = new Mongo.Collection("companies", {
  transform: function(doc) {
    return new Company(doc);
  }
});
