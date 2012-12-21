class Department < ActiveRecord::Base
  has_many :tasks
  attr_accessible :complete, :date_completed, :description, :location, :name
end
