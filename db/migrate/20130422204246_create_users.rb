class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname

      t.timestamps
    end

    add_column :tasks, :user_id, :integer
  end
end
