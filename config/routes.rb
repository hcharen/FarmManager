Rails.application.routes.draw do
  get 'project/index'

  resources :projects


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
