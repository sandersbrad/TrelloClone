TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBoardSubview);
    this.listenTo(this.collection, 'sync', this.render);

    this.collection.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  template: JST['boards/index'],
  
  addBoardSubview: function (board) {
    var boardListItem = new TrelloClone.Views.BoardListItem({
      model: board
    });
    this.addSubview(".boards", boardListItem);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  },
});
