class ProjectController < ApplicationController
  def index
    @projects = Project.all
    # will create a new instance of a Project object, this object will be passed to a rails form helper within project#index
    @project = Project.new
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.js
      else
        format.json { render json: @project.errors.messages, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  def chat
    @message = Message.new
    @messages = Message.last(15)
    @project = Project.find(params[:id])
  end

private

  def project_params
    params.require(:project).permit(:name, :description)
  end



end
