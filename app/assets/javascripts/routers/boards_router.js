TrelloClone.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.boards = new TrelloClone.Collections.Boards();
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "index"
  },

  index: function () {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
    });

    this.swapViews(view);
  },

  swapViews: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
