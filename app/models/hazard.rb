class Hazard < ActiveRecord::Base
  attr_accessible :complete, :date_completed, :description, :question1, :question10, :question2, :question3, :question4, :question5, :question6, :question7, :question8, :question9, :type
end
