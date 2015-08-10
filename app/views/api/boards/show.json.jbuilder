json.extract! @board, :title, :user_id

json.lists @board.lists do |list|
  json.title list.title
  json.cards list.cards do |card|
    json.body card.body
  end
end
