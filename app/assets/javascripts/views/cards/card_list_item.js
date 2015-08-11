TrelloClone.Views.CardListItem = Backbone.View.extend({
  template: JST['cards/card_list_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ card: this.model })
    this.$el.html(content);
    return this;
  },

})
