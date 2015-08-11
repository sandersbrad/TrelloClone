TrelloClone.Views.BoardForm = Backbone.View.extend({

  template: JST['boards/board_form'],

  tagName: 'form',

  events: {
    'submit': 'submitForm',
    'click p': 'renderForm'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },


  render: function () {
    var content = $('<p> Add Board </p>')
    this.$el.html(content)
    return this
  },

  renderForm: function () {
    var content = this.template({ board: this.model })
    this.$el.html(content)
    return this
  },

  submitForm: function (event) {
    event.preventDefault();
    formData = $(event.currentTarget).serializeJSON()
    var model = new TrelloClone.Models.Board()
    this.collection.add(model);
    model.save(formData,{
      success: function () {
        Backbone.history.navigate('', { trigger: true });
      }
    })
  }
})
