# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ActiveRecord::Base
  validates :title, presence: true, length: {maximum: 50}
  validates :user_id, presence: true

  has_many :lists
  has_many :members

  belongs_to :user
end
