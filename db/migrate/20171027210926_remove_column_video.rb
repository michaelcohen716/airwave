class RemoveColumnVideo < ActiveRecord::Migration[5.1]
  def change
    remove_column :episodes, :video_url
    remove_column :episodes, :image_file_name
    remove_column :episodes, :image_content_type
    remove_column :episodes, :image_file_size
    remove_column :episodes, :image_updated_at
  end
end
