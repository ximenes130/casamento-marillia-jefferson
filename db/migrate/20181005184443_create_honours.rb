class CreateHonours < ActiveRecord::Migration[5.2]
  def change
    create_table :honours do |t|
      t.string :title
      t.string :text
      t.string :author

      t.timestamps
    end
  end
end
