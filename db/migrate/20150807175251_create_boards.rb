class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
