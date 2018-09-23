class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.string :title
      t.string :text
      t.date :date

      t.timestamps
    end
  end
end
