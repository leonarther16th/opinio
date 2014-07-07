class Vote < ActiveRecord::Base
	belongs_to :user
	belongs_to :post

	def btn_class(opt_num)
		if self.option == opt_num
			return 'btn-success'
		else
			return 'btn-danger'
		end
	end

	def btn_icon(opt_num)
		if self.option == opt_num
			return "glyphicon glyphicon-ok"
		else
			return "glyphicon glyphicon-remove"
		end
	end
end
