class Api::V1::ExpensesController < ApplicationController
  # before_action :set_expense, only: [:destroy]
  # :show, :update

  # GET /expenses
  def index
    expenses = Expense.all

    render json: expenses, except: [:created_at, :updated_at, :user_id], include: {
      user: {
        except: [:created_at, :updated_at]
      }
    }
  end

  # GET /expenses/1
  # def show
  #   render json: @expense
  # end

  # POST /expenses
  def create
    expense = Expense.new(expense_params)
    if expense.save
      render json: {
        status: 201,
        expense: expense
      }
    else
      render json: {
        status: 422,
        errors: expense.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /expenses/1
  # def update
  #   expense = Expense.find_by_id(params[:id])
  #   if expense.update(expense_params)
  #     render json: expense
  #   else
  #     render json: expense.errors.full_messages.join(", ")
  #   end
  # end

  # DELETE /expenses/1
  def destroy
    expense = Expense.find_by_id(params[:id])
    if expense.destroy
      render json: { status: 200, expense: expense }
    else
      render json: { status: 500 }
    end
  end

  private
  def expense_params
       params.require(:expense).permit(:date, :description, :amount, :user_id)
  end
end