class MessageController < ApplicationController

    def create
      @message = Message.new(message_params)

      respond_to do |format|
      if @message.save
        format.js
      end
    end
  end

  def show
  end

  private

  def message_params
    params.require(:message).permit(:content, :project_id)
  end

end
