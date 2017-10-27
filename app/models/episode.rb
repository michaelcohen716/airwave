class Episode < ApplicationRecord
  validates :title, :description, :video_url, presence: true, uniqueness: true
  
end
