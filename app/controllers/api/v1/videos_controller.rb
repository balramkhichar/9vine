class Api::V1::VideosController < ApplicationController

  def index
    render json: { videos: Video.where(status: 1)}
  end

  def show
    render json: { videos: Video.where(id: params[:id],status: 1)}
  end
end