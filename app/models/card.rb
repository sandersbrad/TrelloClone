# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  list_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ActiveRecord::Base
  validates :body, :list_id, presence: true

  belongs_to :list
end
