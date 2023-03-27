require 'rails_helper'

RSpec.describe "api/ingredients/index", type: :view do
  before(:each) do
    assign(:api_ingredients, [
      Api::Ingredient.create!(
        name: "Name",
        kcalorie_count: 2,
        protein_count: 3,
        carbohydrate_count: 4,
        fat_count: 5,
        weight_in_gramms: 6
      ),
      Api::Ingredient.create!(
        name: "Name",
        kcalorie_count: 2,
        protein_count: 3,
        carbohydrate_count: 4,
        fat_count: 5,
        weight_in_gramms: 6
      )
    ])
  end

  it "renders a list of api/ingredients" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(3.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(4.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(5.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(6.to_s), count: 2
  end
end
