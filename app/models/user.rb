class User < ActiveRecord::Base
  attr_accessible :fname, :lname
  
  has_many :tasks
end
