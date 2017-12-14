Rails.application.routes.draw do
  namespace :api do
    resources :notes, except: [:show]
  end

  get '*other', to: 'static#index'
end
