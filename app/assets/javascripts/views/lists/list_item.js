TrelloClone.Views.ListItem = Backbone.View.extend ({
  template: JST['lists/list_item'],
  tagName: 'element',
  className: 'list',

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
