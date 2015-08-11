class Add < ActiveRecord::Migration
  def change
    add_column :lists, :ord, :integer
    add_column :cards, :ord, :integer
  end
end
