class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :kcalorie_count
      t.integer :protein_count
      t.integer :carbohydrate_count
      t.integer :fat_count
      t.integer :weight_in_gramms

      t.timestamps
    end
  end
end
