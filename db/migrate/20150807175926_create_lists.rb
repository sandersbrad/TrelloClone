class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false, index: true
      t.integer :board_id, null: false, index: true 

      t.timestamps null: false
    end
  end
end
