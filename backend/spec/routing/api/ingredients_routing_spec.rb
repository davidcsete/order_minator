require "rails_helper"

RSpec.describe Api::IngredientsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/ingredients").to route_to("api/ingredients#index")
    end

    it "routes to #new" do
      expect(get: "/api/ingredients/new").to route_to("api/ingredients#new")
    end

    it "routes to #show" do
      expect(get: "/api/ingredients/1").to route_to("api/ingredients#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/api/ingredients/1/edit").to route_to("api/ingredients#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/api/ingredients").to route_to("api/ingredients#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/api/ingredients/1").to route_to("api/ingredients#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/ingredients/1").to route_to("api/ingredients#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/api/ingredients/1").to route_to("api/ingredients#destroy", id: "1")
    end
  end
end
