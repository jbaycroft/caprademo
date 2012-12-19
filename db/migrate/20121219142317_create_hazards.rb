class CreateHazards < ActiveRecord::Migration
  def change
    create_table :hazards do |t|
      t.integer :type
      t.text :description
      t.string :question1
      t.string :question2
      t.string :question3
      t.string :question4
      t.boolean :question5
      t.boolean :question6
      t.boolean :question7
      t.boolean :question8
      t.string :question9
      t.string :question10
      t.boolean :complete
      t.date :date_completed
      t.references :task

      t.timestamps
    end
    add_index :hazards, :task_id
  end
end
