class CondimentsController < ApplicationController
  before_action :set_condiment, only: %i[ show update destroy ]

  # GET /condiments
  # GET /condiments.json
  def index
    @condiments = Condiment.all
  end

  # GET /condiments/1
  # GET /condiments/1.json
  def show
  end

  # POST /condiments
  # POST /condiments.json
  def create
    @condiment = Condiment.new(condiment_params)

    if @condiment.save
      render :show, status: :created, location: @condiment
    else
      render json: @condiment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /condiments/1
  # PATCH/PUT /condiments/1.json
  def update
    if @condiment.update(condiment_params)
      render :show, status: :ok, location: @condiment
    else
      render json: @condiment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /condiments/1
  # DELETE /condiments/1.json
  def destroy
    @condiment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_condiment
      @condiment = Condiment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def condiment_params
      params.require(:condiment).permit(:name, :quantity_in_grams, :description)
    end
end
