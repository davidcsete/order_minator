class CreateCondiments < ActiveRecord::Migration[7.0]
  def change
    create_table :condiments do |t|
      t.string :name
      t.integer :quantity_in_grams
      t.string :description

      t.timestamps
    end
  end
end
