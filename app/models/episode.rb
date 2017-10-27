class Episode < ApplicationRecord
  has_attached_file :video, default_url: "ctvc_BAYER.ogv"
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/
  validates :title, :description, presence: true, uniqueness: true

  has_many :watchlist_adds,
    primary_key: :id,
    foreign_key: :episode_id,
    class_name: 'WatchlistAdd'


end
