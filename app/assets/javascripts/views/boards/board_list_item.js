TrelloClone.Views.BoardListItem = Backbone.View.extend ({
  template: JST["boards/board_list_item"],

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
});
