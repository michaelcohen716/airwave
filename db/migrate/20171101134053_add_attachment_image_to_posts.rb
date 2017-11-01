class AddAttachmentImageToPosts < ActiveRecord::Migration[5.1]
  def change
    change_table :series do |t|
      t.attachment :image
    end
  end


end
