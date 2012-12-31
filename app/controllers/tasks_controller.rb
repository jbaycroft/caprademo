class TasksController < ApplicationController
  # GET /tasks
  # GET /tasks.json
  before_filter :get_department
  def get_department
    @department=Department.find(params[:department_id])
  end
  def index
    @tasks = @department.tasks.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @tasks }
    end
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
    @task = @department.tasks.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @task }
    end
  end

  # GET /tasks/new
  # GET /tasks/new.json
  def new
    @task = @department.tasks.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: [@department,@task] }
    end
  end

  # GET /tasks/1/edit
  def edit
    @task = @department.tasks.find(params[:id])
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = @department.tasks.new(params[:task])

    respond_to do |format|
      if @task.save
        format.html { redirect_to [@department,@task], notice: 'Task was successfully created.' }
        format.json { render json: @department, status: :created, location: @task }
      else
        format.html { render action: "new" }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /tasks/1
  # PUT /tasks/1.json
  def update
    @task = @department.tasks.find(params[:id])

    respond_to do |format|
      if @task.update_attributes(params[:task])
        format.html { redirect_to [@department,@task], notice: 'Task was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task = @department.tasks.find(params[:id])
    @task.destroy

    respond_to do |format|
      format.js
    end
  end
end
