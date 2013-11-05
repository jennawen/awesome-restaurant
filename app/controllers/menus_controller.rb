class MenusController < ApplicationController

  def index
    @menus = Menu.all
    @menu = Menu.new
  end

  def create
    @menu = Menu.new(name: params[:name])
    if @menu.save
      render :json => { new_menu: @menu.name }
    else
      redirect_to root_path
    end
  end

end
