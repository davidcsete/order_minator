class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.references :meal, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true
      t.references :condiment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
