class Recipe < ApplicationRecord
  belongs_to :meal
  belongs_to :ingredient
  belongs_to :condiment
end
