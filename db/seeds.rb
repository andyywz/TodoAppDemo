user = User.create!(:fname => "Houdini", :lname => "Beck")
Task.create!(:title => "t1", :user_id => user.id)
Task.create!(:title => "t2", :user_id => user.id)
