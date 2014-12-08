class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.text :story
      t.string :yid
      t.integer :status

      t.timestamps
    end
  end
end
