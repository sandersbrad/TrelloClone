# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{username: "Brad", email_address: "sandersbrad@gmail.com"},
                     {username: "Charlie", email_address: "chobbs47@gmail.com"},
                     {username: "Faye", email_address: "fayekeegan@gmail.com"}])

boards = Board.create([{title: "Test board one", user_id: 1}, {title: "Test board two", user_id: 2}])

lists = List.create([{title: "This is a list for board one", board_id: 1},
                     {title: "This is a list for board two", board_id: 2}])

cards = Card.create([{body: "Card 1, List 1, Board 1", list_id: 1},
                     {body: "Card 2, List 1, Board 1", list_id: 1},
                     {body: "Card 3, List 1, Board 1", list_id: 1},
                     {body: "Card 1, List 2, Board 2", list_id: 2},
                     {body: "Card 2, List 2, Board 2", list_id: 2}])
