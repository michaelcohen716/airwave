class Series < ApplicationRecord
  has_attached_file :image, default_url: "groucho_movie.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :name, :description, presence: true
  validates :name, uniqueness: true

  has_many :episodes,
    primary_key: :id,
    foreign_key: :series_id,
    class_name: 'Episode'
end
