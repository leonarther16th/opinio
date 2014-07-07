module PostsHelper
	def num_votes(post_id, option)
		chosen_votes = Vote.where(["post_id = ? and option = ?", post_id, option]).count()
		all_votes = Vote.where(["post_id = ?", post_id]).count()
		return ((chosen_votes.to_f/all_votes.to_f) * 100).round(2)
	end
end
