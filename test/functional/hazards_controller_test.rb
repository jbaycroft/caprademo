require 'test_helper'

class HazardsControllerTest < ActionController::TestCase
  setup do
    @hazard = hazards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:hazards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create hazard" do
    assert_difference('Hazard.count') do
      post :create, hazard: { complete: @hazard.complete, date_completed: @hazard.date_completed, description: @hazard.description, question10: @hazard.question10, question1: @hazard.question1, question2: @hazard.question2, question3: @hazard.question3, question4: @hazard.question4, question5: @hazard.question5, question6: @hazard.question6, question7: @hazard.question7, question8: @hazard.question8, question9: @hazard.question9, type: @hazard.type }
    end

    assert_redirected_to hazard_path(assigns(:hazard))
  end

  test "should show hazard" do
    get :show, id: @hazard
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @hazard
    assert_response :success
  end

  test "should update hazard" do
    put :update, id: @hazard, hazard: { complete: @hazard.complete, date_completed: @hazard.date_completed, description: @hazard.description, question10: @hazard.question10, question1: @hazard.question1, question2: @hazard.question2, question3: @hazard.question3, question4: @hazard.question4, question5: @hazard.question5, question6: @hazard.question6, question7: @hazard.question7, question8: @hazard.question8, question9: @hazard.question9, type: @hazard.type }
    assert_redirected_to hazard_path(assigns(:hazard))
  end

  test "should destroy hazard" do
    assert_difference('Hazard.count', -1) do
      delete :destroy, id: @hazard
    end

    assert_redirected_to hazards_path
  end
end
