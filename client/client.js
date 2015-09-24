if (Meteor.isClient) {

  Template.companyList.helpers({
    companies: function() {
      return Companies.find();
    },
    companyCount: function() {
      return Companies.find().count();
    }
  });

}
