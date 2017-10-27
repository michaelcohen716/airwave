class CreateEpisode < ActiveRecord::Migration[5.1]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :video_url, null: false
      t.integer :series_id

      t.timestamps
    end
  end
end
