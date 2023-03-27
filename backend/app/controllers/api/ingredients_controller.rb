class Api::IngredientsController < ApplicationController
  before_action :set_api_ingredient, only: %i[ show edit update destroy ]

  # GET /api/ingredients or /api/ingredients.json
  def index
    @api_ingredients = Api::Ingredient.all
  end

  # GET /api/ingredients/1 or /api/ingredients/1.json
  def show
  end

  # GET /api/ingredients/new
  def new
    @api_ingredient = Api::Ingredient.new
  end

  # GET /api/ingredients/1/edit
  def edit
  end

  # POST /api/ingredients or /api/ingredients.json
  def create
    @api_ingredient = Api::Ingredient.new(api_ingredient_params)

    respond_to do |format|
      if @api_ingredient.save
        format.html { redirect_to api_ingredient_url(@api_ingredient), notice: "Ingredient was successfully created." }
        format.json { render :show, status: :created, location: @api_ingredient }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @api_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/ingredients/1 or /api/ingredients/1.json
  def update
    respond_to do |format|
      if @api_ingredient.update(api_ingredient_params)
        format.html { redirect_to api_ingredient_url(@api_ingredient), notice: "Ingredient was successfully updated." }
        format.json { render :show, status: :ok, location: @api_ingredient }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @api_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/ingredients/1 or /api/ingredients/1.json
  def destroy
    @api_ingredient.destroy

    respond_to do |format|
      format.html { redirect_to api_ingredients_url, notice: "Ingredient was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_ingredient
      @api_ingredient = Api::Ingredient.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_ingredient_params
      params.require(:api_ingredient).permit(:name, :kcalorie_count, :protein_count, :carbohydrate_count, :fat_count, :weight_in_gramms)
    end
end
