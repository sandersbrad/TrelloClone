TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBoardSubview);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.removeBoardSubview)

    this.collection.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));

    this.addFormSubview()
  },

  template: JST['boards/index'],

  removeBoardSubview: function (board) {
    this.removeModelSubview('.boards', board)
  },

  addBoardSubview: function (board) {
    var boardListItem = new TrelloClone.Views.BoardListItem({
      model: board
    });
    this.addSubview(".boards", boardListItem);
  },

  addFormSubview: function () {
    var form = new TrelloClone.Views.BoardForm({ collection: this.collection });
    this.addSubview(".form", form);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  }
});
