class CreateWatchlistAdds < ActiveRecord::Migration[5.1]
  def change
    create_table :watchlist_adds do |t|
      t.integer :user_id, null: false
      t.integer :episode_id, null: false

      t.timestamps
    end

  end
end
