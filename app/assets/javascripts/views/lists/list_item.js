TrelloClone.Views.ListItem = Backbone.CompositeView.extend ({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.cards = this.model.cards();
    this.listenTo(this.cards, 'add', this.addCardSubview);
  },

  className: 'list',
  template: JST['lists/list_item'],
  tagName: 'element',

  addCardSubview: function (card) {

    var cardListItem = new TrelloClone.Views.CardListItem({
      model: card
    });

    this.addSubview(".cards", cardListItem);
  },


  render: function () {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();

    this.cards.each(function (card) {
      this.addCardSubview(card);
    }.bind(this));

    return this;
  },


});
