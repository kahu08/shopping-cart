import Ember from 'ember';

export default Ember.Component.extend({
    shoppingCart: Ember.inject.Service(),

    actions: {
        addToCart(item) {
            this.get('shoppingCart').add(item);
        },
    }
});
