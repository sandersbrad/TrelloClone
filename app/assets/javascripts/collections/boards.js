TrelloClone.Collections.Boards = Backbone.Collection.extend({

  model: TrelloClone.Models.Board,

  url: "/api/boards",

  getOrFetch: function (id) {
    var board = this.get(id);

    if(!board) {
      board = new TrelloClone.Views.Board({ id: id });
      board.fetch({
        success: function () {
          this.add(board);
        }.bind(this)
      });
    } else {
      board.fetch();
    }

    return board;
  }

});
