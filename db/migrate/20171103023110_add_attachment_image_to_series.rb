class AddAttachmentImageToSeries < ActiveRecord::Migration[5.1]
  def change
    change_table :series do |t|
      t.attachment :image_thumb
    end
  end
end
