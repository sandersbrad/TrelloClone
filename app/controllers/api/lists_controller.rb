class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)

    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages
    end
  end

  def destroy
    @list = List.find(params[:id])

    @list.destroy
    render json: List.all
  end

  def update
    @list = List.find(params[:id])

    if @list.update_attributes(list_params)
      render json: @list
    else
      render json: @list.errors.full_messages
    end
  end

  def edit
    @list = List.find(params[:id])

    render json: @list
  end

  def show
    @list = List.find(params[:id])

    render json: @list
  end

  def index
    @lists = List.find_by_board_id(params[:board_id])

    render json: @lists
  end

  private

  def list_params
    params.require(:list).permit(:username, :email)
  end



end
