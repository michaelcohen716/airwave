class RemoveColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :episodes, :thumb_content_type
    remove_column :episodes, :thumb_file_size
    remove_column :episodes, :thumb_updated_at
  end
end
