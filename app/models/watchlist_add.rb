class WatchlistAdd < ApplicationRecord
  validates :user_id, :episode_id, presence: true

  belongs_to :episode,
    primary_key: :id,
    foreign_key: :episode_id,
    class_name: 'Episode'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'  
end
