Rails.application.routes.draw do
  get 'message/create'

  # Project Routes
  get 'projects', to: 'project#index'
  get 'projects/:id', to: 'project#show', as: 'project'
  get 'projects/:id/chat', to: 'project#chat', as: 'project_chat'
  post 'projects', to: 'project#create'

  # Project Messaging Route (chat)
  post 'messages', to: 'message#create'





  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
