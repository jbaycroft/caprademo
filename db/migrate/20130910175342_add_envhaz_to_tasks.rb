class AddEnvhazToTasks < ActiveRecord::Migration
  def up
  	add_column :tasks, :envhaz1, :boolean
  	add_column :tasks, :envhaz2, :boolean
  	add_column :tasks, :envhaz3, :boolean
  	add_column :tasks, :envhaz4, :boolean
  	add_column :tasks, :envhaz5, :boolean
  	add_column :tasks, :envhaz6, :boolean
  	add_column :tasks, :envhaz7, :boolean
  	add_column :tasks, :envhaz8, :boolean
  end
  def down
  	remove_column :tasks, :envhaz1, :boolean
  	remove_column :tasks, :envhaz2, :boolean
  	remove_column :tasks, :envhaz3, :boolean
  	remove_column :tasks, :envhaz4, :boolean
  	remove_column :tasks, :envhaz5, :boolean
  	remove_column :tasks, :envhaz6, :boolean
  	remove_column :tasks, :envhaz7, :boolean
  	remove_column :tasks, :envhaz8, :boolean
  end
end
