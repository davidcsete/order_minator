json.extract! condiment, :id, :name, :quantity_in_grams, :description, :created_at, :updated_at
json.url condiment_url(condiment, format: :json)
