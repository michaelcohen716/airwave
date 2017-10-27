class RemoveColumnFromEpisode < ActiveRecord::Migration[5.1]
  def change
    remove_column :episodes, :thumb_file_name, :thumb_content_type
  end
end
