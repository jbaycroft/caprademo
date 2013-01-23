class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.boolean :hazard1
      t.boolean :hazard2
      t.boolean :hazard3
      t.boolean :hazard4
      t.boolean :hazard5
      t.boolean :hazard6
      t.boolean :hazard7
      t.boolean :hazard8
      t.boolean :hazard9
      t.boolean :hazard10
      t.boolean :hazard11
      t.boolean :hazard12
      t.boolean :hazard13
      t.boolean :hazard14
      t.boolean :hazard15
      t.boolean :hazard16
      t.boolean :hazard17
      t.boolean :hazard18
      t.boolean :hazard19
      t.boolean :hazard20
      t.string :location
      t.boolean :complete
      t.date :date_completed
      t.text :team
      t.string :shifttime
      t.boolean :shiftday
      t.boolean :shiftnight
      t.boolean :shiftweekend
      t.string :shiftwrker
      t.boolean :equipmachine
      t.text :machine
      t.boolean :equiptool
      t.text :tool
      t.boolean :equipdevice
      t.text :device
      t.string :restricted
      t.boolean :restrictmethod1
      t.boolean :restrictmethod2
      t.boolean :restrictmethod3
      t.text :history
      t.references :department

      t.timestamps
    end
    add_index :tasks, :department_id
  end
end
