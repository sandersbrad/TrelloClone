TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBoardSubview);
    this.listenTo(this.collection, 'sync add', this.render);
    debugger
    this.collection.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  template: JST['boards/index'],
  tagName: 'ul',
  className: 'boards',

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
