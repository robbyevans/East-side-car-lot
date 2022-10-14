# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding ..🙂"

Admin.create(name:"Purity",password:"user1",email:"purity@gmail.com")
Admin.create(name:"Victor",password:"msanii",email:"foker@gmail.com")
Admin.create(name:"Tracy",password:"user2",email:"tracy@gmail.com")
Admin.create(name:"Don",password:"user3",email:"don@gmail.com")
Admin.create(name:"Tweri",password:"user4",email:"tweri@gmail.com")



User.create(name:"Allan",password:"user1",email:"allan@gmail.com",car_number:"KCD 456")
User.create(name:"Abdul",password:"user5",email:"abdul@gmail.com",car_number:"KDD 321")
User.create(name:"Kelvin",password:"user3",email:"kelvin@gmail.com",car_number:"KBB 345")
User.create(name:"Brian",password:"user2",email:"brian@gmail.com",car_number:"KCA 434")
User.create(name:"Leroy",password:"user6",email:"leroy@gmail.com",car_number:"KAA 222")
User.create(name:"Victor",password:"user4",email:"victor@gmail.com",car_number:"KCD 000")
User.create(name:"Grace",password:"user7",email:"grace@gmail.com",car_number:"KAB 787")


# CarSlot.create(bigint:45,bigint:45)
# Car_slot.create(bigint:"user2",bigint:"admin2")
# Car_slot.create(bigint:"user3",bigint:"admin3")
# Car_slot.create(bigint:"user4",bigint:"admin4")
# Car_slot.create(bigint:"user5",bigint:"admin5")
# Car_slot.create(bigint:"user6",bigint:"admin6")




puts "Done seeding!"