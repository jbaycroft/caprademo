class Department < ActiveRecord::Base
  has_many :tasks, :dependent => :destroy
  attr_accessible :complete, :date_completed, :description, :location, :name
end
