puts "🌱 Seeding employees..."

dan_kipruto = Employee.create(name: "Kipruto",gender: "Male",department: "Accounts")
maurine_odhiambo = Employee.create(name: "Maurine",gender: "Female",department: "IT")
steve_mwangi = Employee.create(name: "Steve",gender: "Male",department: "Store")

puts "🌱 Seeding products..."

hp_laptop = Product.create(name: "HP",price: 40_000,category: "IT")
receipt_book = Product.create(name: "Receipt_Book",price: 5_000,category: "accounts")
maize_cereals = Product.create(name: "Maize_cereals",price: 20_000,category: "store")

puts "🌱 Seeding roles..."

update_accounts_register = Role.create(task: "Update_Accounts_Register",employee_id: 1,product_id: 2)
update_IT_register = Role.create(task: "Update_IT_Register",employee_id: 2,product_id: 1)
update_stores_register = Role.create(task: "Update_Stores_Register",employee_id: 3,product_id: 3)



puts "✅ Done seeding!"
