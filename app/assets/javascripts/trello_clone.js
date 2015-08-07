window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert("backbone")
    var $rootEl = $('.content');
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();

    new TrelloClone.Routers.BoardRouter(boards, $rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
