require 'rails_helper'

RSpec.describe "api/ingredients/show", type: :view do
  before(:each) do
    assign(:api_ingredient, Api::Ingredient.create!(
      name: "Name",
      kcalorie_count: 2,
      protein_count: 3,
      carbohydrate_count: 4,
      fat_count: 5,
      weight_in_gramms: 6
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/5/)
    expect(rendered).to match(/6/)
  end
end
