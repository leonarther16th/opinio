class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :statement
      t.string :first_option
      t.string :second_option
      t.string :third_option
      t.integer :user_id
      t.string :meta_data
      t.string :mete_data_type

      t.timestamps
    end
  end
end
