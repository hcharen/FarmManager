Rails.application.routes.draw do
devise_for :users, :controllers => { registrations: 'registrations' }
  get 'message/create'

  root 'project#index'
  # Project Routes
  get 'projects', to: 'project#index'
  get 'projects/:id', to: 'project#show', as: 'project'
  get 'projects/:id/chat', to: 'project#chat', as: 'project_chat'
  post 'projects', to: 'project#create'

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
  # Project Messaging Route (chat)
  post 'messages', to: 'message#create'





  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
