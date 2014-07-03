json.array!(@posts) do |post|
  json.extract! post, :id, :statement, :first_option, :second_option, :third_option, :user_id, :meta_data, :mete_data_type
  json.url post_url(post, format: :json)
end
