Rails.application.routes.draw do

	root to: 'static_pages#root.html'

	namespace :api, defaults: {format: :json} do
		resources :users, only: [:create, :show]
		resource :session, only: [:create, :show, :destroy]


	end

end
