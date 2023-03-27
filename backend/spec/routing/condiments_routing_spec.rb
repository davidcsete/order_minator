require "rails_helper"

RSpec.describe CondimentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/condiments").to route_to("condiments#index")
    end

    it "routes to #show" do
      expect(get: "/condiments/1").to route_to("condiments#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/condiments").to route_to("condiments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/condiments/1").to route_to("condiments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/condiments/1").to route_to("condiments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/condiments/1").to route_to("condiments#destroy", id: "1")
    end
  end
end
