class Api::V1::SuggestionsController < ApplicationController

  def index
    render json: { suggestions: Video.order("RANDOM()").first(5)}
  end
end 