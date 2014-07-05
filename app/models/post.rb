class Post < ActiveRecord::Base
	belongs_to :user
	has_many :vote
	default_scope order('created_at DESC')
end
