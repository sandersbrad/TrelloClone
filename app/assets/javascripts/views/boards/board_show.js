TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addListSubview);
    this.listenTo(this.collection, 'sync', this.render);
    debugger
    this.collection.each(function (list) {
      this.addListSubview(list);
    }.bind(this));
  },

  template: JST['boards/board_show'],

  addListSubview: function (list) {
    var listItem = new TrelloClone.Views.ListItem({
      model: list
    });
    this.addSubview(".lists", listItem);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  },
});
