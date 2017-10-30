class Series < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: true

  has_many :episodes,
    primary_key: :id,
    foreign_key: :series_id,
    class_name: 'Episode'
end
