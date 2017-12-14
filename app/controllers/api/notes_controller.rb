class Api::NotesController < ApplicationController
  before_action :set_note, except: [:index, :create]

  def index
    render json: Note.order(created_at :desc)
  end

  def create
    note = Note.create(note_params)
    if note.save
      render json: note
    else
      render json: { errors: note.error.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.error.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @note.destroy
  end

  private
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :body)
    end

end
