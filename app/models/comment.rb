class Comment < ApplicationRecord
  validates :body, :user_id, :episode_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :episode,
    primary_key: :id,
    foreign_key: :episode_id,
    class_name: :Episode
end
