user = User.create!(:fname => "fname", :lname => "lname")
Task.create!(:title => "t1", :user_id => user.id)
Task.create!(:title => "t2", :user_id => user.id)
