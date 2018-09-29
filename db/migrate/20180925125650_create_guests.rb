class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string :name
      t.boolean :confirmed, default: false

      t.timestamps
    end
  end
end
