TodoApp::Application.routes.draw do
  resources :tasks
  resources :users do
    resources :tasks
  end

  root :to => "tasks#index"
end
