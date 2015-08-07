class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end

  end

  def destroy
    @user = User.find(params[:id])

    @user.destroy
    render json: User.all
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def edit
    @user = User.find(params[:id])

    render json: @user
  end

  def show
    @user = User.find(params[:id])

    render json: @user
  end

private

  def user_params
    params.require(:user).permit(:username, :email)
  end


end
