TrelloClone.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function (boards, $rootEl) {
    this.boards = boards;
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "index"
  },

  index: function () {
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
