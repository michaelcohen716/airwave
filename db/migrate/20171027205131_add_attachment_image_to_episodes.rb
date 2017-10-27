class AddAttachmentImageToEpisodes < ActiveRecord::Migration[5.1]
  def self.up
    change_table :episodes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :episodes, :image
  end
end
