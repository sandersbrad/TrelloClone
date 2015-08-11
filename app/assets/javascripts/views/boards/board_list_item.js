TrelloClone.Views.BoardListItem = Backbone.View.extend ({
  template: JST["boards/board_list_item"],
  tagName: 'element',
  className: 'board',

  events: {
    'click button': 'deleteBoard'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },

  deleteBoard: function () {
    var model = this.model;
    model.destroy()
  }
});
