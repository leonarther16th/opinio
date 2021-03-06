class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]

  has_many :post
  has_many :vote
  
def self.from_omniauth(auth)
  where(auth.slice(:provider, :uid)).first_or_create do |user|
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    user.name = auth.info.name   # assuming the user model has a name
    user.image = auth.info.image # assuming the user model has an image [?height=200&type=normal&width=200] for use after image link
    user.extra = auth.info.gender
  end
end

 def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end


  def full_name
  	if !self.first_name.blank?
  		self.first_name + ' ' + self.last_name 
  	else
  		 'You!'
  	end
  end

  def largeimage
    "http://graph.facebook.com/#{self.uid}/picture?type=large"
  end
  
  def normalimage
    "http://graph.facebook.com/#{self.uid}/picture?height=200&type=normal&width=200"
  end

end
