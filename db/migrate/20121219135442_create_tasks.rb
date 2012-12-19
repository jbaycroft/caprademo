class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.boolean :hazard1
      t.boolean :hazard2
      t.boolean :hazard3
      t.boolean :hazard4
      t.string :location
      t.boolean :complete
      t.date :date_completed
      t.references :department

      t.timestamps
    end
    add_index :tasks, :department_id
  end
end
