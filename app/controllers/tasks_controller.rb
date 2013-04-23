class TasksController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def create
    @task = Task.new(params[:task])

    if @task.save
      render :json => @task
    else
      render :json => @task.errors, :status => 422
    end
  end

  def index
    @tasks = Task
    if params.include?(:user_id)
      @tasks = @tasks.where(:user_id => params[:user_id])
    end
    @tasks = @tasks.all

    respond_to do |format|
      format.html { render :index } # entry-point for Backbone app
      format.json { render :json => @tasks }
    end
  end
end
