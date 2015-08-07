class Api::BoardsController < ApplicationController

  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board
    else
      render json: @board.errors.full_messages
    end

  end

  def index
    # current_user.boards
    @boards = Board.all

    render json: @boards
  end

  def destroy
    @board = Board.find(params[:id])

    @board.destroy
    render json: Board.all
  end

  def update
    @board = Board.find(params[:id])

    if @board.update_attributes(board_params)
      render json: @board
    else
      render json: @board.errors.full_messages
    end
  end

  def edit
    @board = Board.find(params[:id])

    render json: @board
  end

  def show
    @board = Board.find(params[:id])

    render json: @board
  end

private

  def board_params
    params.require(:board).permit(:title, :user_id)
  end


end
