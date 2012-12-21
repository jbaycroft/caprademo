class ChangeHazardsTable < ActiveRecord::Migration
  def up
  	rename_column :hazards, :type, :haztype
  end

  def down
  end
end
