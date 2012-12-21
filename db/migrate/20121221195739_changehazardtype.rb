class Changehazardtype < ActiveRecord::Migration
  def up
  	change_table :hazards do |t|
  		t.change :haztype, :string
  	end
  end

  def down
  end
end
