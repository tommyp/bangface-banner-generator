import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['say'],

  sayWithDefault: function () {
    if (this.get('say')) {
      return this.get('say')
    } else {
      return "Type now";
    }
  }.property('say'),

  actions: {
    focusOnInput() {
      Ember.$.find("input").get(0).focus();
    }
  }
});
