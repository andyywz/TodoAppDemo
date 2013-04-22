class Task < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates :title, :presence => true
end
