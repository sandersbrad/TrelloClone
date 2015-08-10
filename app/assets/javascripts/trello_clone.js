window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');

    new TrelloClone.Routers.BoardRouter($rootEl)
    Backbone.history.start();
  }
}

$(document).ready(function(){
  TrelloClone.initialize();
});
