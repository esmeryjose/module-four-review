class Api::V1::PicturesController < ApplicationController
  before_action :set_picture, only: [:edit, :show, :destroy]

  def index
    @pictures = Picture.all
    render json: @pictures
  end

  def create
    @picture = Picture.create(picture_params)
    render json: @picture
  end

  def show
    render json: @picture
  end

  def update
    @picture.assign_attributes(picture_params)
    @picture.save
    render json: @picture
  end

  def destroy
    @destroy_picture = @picture.dup
    @destroy_picture.id = @picture.id.dup
    @picture.destroy
    render json: @destroy_picture
  end

  private

  def set_picture
    @picture = Picture.find_by(id: params[:id])
  end

  def picture_params
    params.require(:picture).permit(:caption, :link)
  end

end
