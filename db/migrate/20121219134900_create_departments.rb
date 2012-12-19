class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.string :name
      t.text :description
      t.string :location
      t.boolean :complete
      t.date :date_completed

      t.timestamps
    end
  end
end
