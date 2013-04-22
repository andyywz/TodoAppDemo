TodoApp::Application.routes.draw do
  resources :tasks
  resources :users

  root :to => "tasks#index"
end
