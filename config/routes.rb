Rails.application.routes.draw do

	root to: 'static_pages#root.html'

	namespace :api, defaults: {format: :json} do
		resources :users, only: [:index, :create, :show, :update]
		resource :session, only: [:create, :show, :destroy]
		resources :albums, only: [:index, :create, :show, :update, :destroy]
		resources :photos, only: [:index, :create, :show, :update, :destroy]
	end

end
