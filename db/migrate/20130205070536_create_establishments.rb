class CreateEstablishments < ActiveRecord::Migration
  def change
    create_table :establishments do |t|
      t.string :location
      t.string :address
      t.string :name

      t.timestamps
    end
  end
end
