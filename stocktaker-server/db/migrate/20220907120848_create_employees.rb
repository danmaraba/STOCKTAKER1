class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :gender
      t.integer :employee_id
      t.string :department
      t.timestamps
    end
  end
end
