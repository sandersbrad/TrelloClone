TrelloClone.Collections.Lists = Backbone.Collection.extend({

  model: TrelloClone.Models.List,

  url: "/api/lists",

  // getOrFetch: function (id) {
  //   var board = this.get(id);
  //
  //   if(!board) {
  //     board = new TrelloClone.Views.Lists({ id: id });
  //     board.fetch({
  //       success: function () {
  //         this.add(board);
  //       }.bind(this)
  //     });
  //   } else {
  //     board.fetch();
  //   }
  //
  //   return board;
  // }

});
