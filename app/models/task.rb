class Task < ActiveRecord::Base
  belongs_to :department
  has_many :hazards, :dependent => :destroy
  attr_accessible :complete, :date_completed, :description, :hazard1, :hazard2, :hazard3, :hazard4, :location, :name
  accepts_nested_attributes_for :hazards
end
