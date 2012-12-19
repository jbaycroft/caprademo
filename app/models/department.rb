class Department < ActiveRecord::Base
  attr_accessible :complete, :date_completed, :description, :location, :name
end
