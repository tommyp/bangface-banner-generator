import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['banner'],

  bannerWithDefault: function () {
    if (this.get('banner')) {
      return this.get('banner');
    } else {
      return "Type here and fuck off";
    }
  }.property('banner'),

  actions: {
    focusOnInput() {
      Ember.$.find("input").get(0).focus();
    }
  }
});
