class Episode < ApplicationRecord
  validates :title, :description, :video_url, presence: true, uniqueness: true

  has_many :watchlist_adds,
    primary_key: :id,
    foreign_key: :episode_id,
    class_name: 'WatchlistAdd'

    
end
