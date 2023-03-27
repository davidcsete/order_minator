require 'rails_helper'

RSpec.describe "api/ingredients/new", type: :view do
  before(:each) do
    assign(:api_ingredient, Api::Ingredient.new(
      name: "MyString",
      kcalorie_count: 1,
      protein_count: 1,
      carbohydrate_count: 1,
      fat_count: 1,
      weight_in_gramms: 1
    ))
  end

  it "renders new api_ingredient form" do
    render

    assert_select "form[action=?][method=?]", api_ingredients_path, "post" do

      assert_select "input[name=?]", "api_ingredient[name]"

      assert_select "input[name=?]", "api_ingredient[kcalorie_count]"

      assert_select "input[name=?]", "api_ingredient[protein_count]"

      assert_select "input[name=?]", "api_ingredient[carbohydrate_count]"

      assert_select "input[name=?]", "api_ingredient[fat_count]"

      assert_select "input[name=?]", "api_ingredient[weight_in_gramms]"
    end
  end
end
