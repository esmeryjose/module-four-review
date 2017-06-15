class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :link
      t.string :caption

      t.timestamps
    end
  end
end
