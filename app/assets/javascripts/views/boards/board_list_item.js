TrelloClone.Views.BoardListItem = Backbone.View.extend ({
  template: JST["boards/board_list_item"],
  tagName: 'element',
  className: 'board',

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
});
