import Ember from 'ember';

export default Ember.Controller.extend({
    applicationController: Ember.inject.controller('application'),
    stats: Ember.computed.reads('applicationController.model.stats'),
    config: Ember.computed.reads('applicationController.config')
});
