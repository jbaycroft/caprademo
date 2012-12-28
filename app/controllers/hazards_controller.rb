class HazardsController < ApplicationController
  # GET /hazards
  # GET /hazards.json
  before_filter :get_department
  before_filter :get_task

  def get_department
    @department=Department.find(params[:department_id])
  end
  def get_task
    @task=@department.tasks.find(params[:task_id])
  end
  def index
    @hazards = @task.hazards.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @hazards }
    end
  end

  # GET /hazards/1
  # GET /hazards/1.json
  def show
    @hazard = @task.hazards.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @hazard }
    end
  end

  # GET /hazards/new
  # GET /hazards/new.json
  def new
    @hazard = @task.hazards.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @hazard }
    end
  end

  # GET /hazards/1/edit
  def edit
    @hazard = @task.hazards.find(params[:id])
  end

  # POST /hazards
  # POST /hazards.json
  def create
    @hazard = @task.hazards.new(params[:hazard])

    respond_to do |format|
      if @hazard.save
        format.html { redirect_to [@department,@task], notice: 'Hazard was successfully created.' }
        format.json { render json: @task, status: :created, location: @hazard }
      else
        format.html { render action: "new" }
        format.json { render json: @hazard.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /hazards/1
  # PUT /hazards/1.json
  def update
    @hazard = @task.hazards.find(params[:id])

    respond_to do |format|
      if @hazard.update_attributes(params[:hazard])
        format.html { redirect_to @task, notice: 'Hazard was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @hazard.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hazards/1
  # DELETE /hazards/1.json
  def destroy
    @hazard = @task.hazards.find(params[:id])
    @hazard.destroy

    respond_to do |format|
      format.js
    end
  end
end
