json.extract! ingredient, :id, :name, :kcalorie_count, :protein_count, :carbohydrate_count, :fat_count, :weight_in_gramms, :created_at, :updated_at
json.url ingredient_url(ingredient, format: :json)
