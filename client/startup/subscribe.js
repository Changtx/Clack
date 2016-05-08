Meteor.subscribe('allUsernames');
Meteor.subscribe('channels');


Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
    //self.autorun(function() {
    //  Messages.find({channel: Session.get('channel')}).count();
    //  Meteor.setTimeout(function () {
    //    $('.message-history').scrollTop(Number.MAX_VALUE);
    //  }, 100);
    //});
  });
});

Meteor.startup(function() {
  Session.set('channel', 'general');
});