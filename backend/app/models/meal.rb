class Meal < ApplicationRecord
  has_many :ingredients, through: :recipes
  has_many :condiments, through: :recipes
end
