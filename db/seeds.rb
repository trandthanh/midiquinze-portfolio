# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Member.destroy_all
Client.destroy_all
Project.destroy_all

puts "Creating team members..."
cléo = Member.create(name: "Cléo Barand", role: "Art director", link: "https://www.linkedin.com/in/cleobarand/")
romain = Member.create(name: "ROMAIN BELLEVILLE", role: "Co-founder + Creative director", link: "https://www.linkedin.com/in/romain-belleville/")
jérémie = Member.create(name: "JÉRÉMIE BŒGLIN", role: "Co-founder + Creative director", link: "https://www.linkedin.com/in/jérémie-boeglin-9b2741142/")
morgane = Member.create(name: "MORGANE LEJEAU", role: "Account director", link: "https://www.linkedin.com/in/morgane-lejeau/")
laura = Member.create(name: "LAURA JOVELIN", role: "Art director junior", link: "https://www.linkedin.com/in/laura-jovelin-9b7b14155/")
léa = Member.create(name: "LÉA RETAILLEAU", role: "Assistant art director", link: "https://www.linkedin.com/in/lea-retailleau-a03453182/")
puts "Done creating team members!"

puts "Creating clients ..."

clients = [
"27 rosiers",
"Alain Édouard",
"Brainsonic",
"Bros Stories",
"Canard & cie",
"Carhartt WIP",
"Claravista",
"Converse",
"Deepomatic",
"Ensemble",
"Europe 1",
"EPC",
"Fere Paris",
"Fit Classics",
"FFF",
"Givenchy",
"Horus Travaux",
"Joone",
"Kaki",
"Louis Pion",
"Maison de famille",
"Maison nouvelle",
"Maison Marine",
"Maurice Garage",
"Nike",
"Nooz optics",
"Opus Paris",
"Paris Saint-Germain",
"Premier Amour",
"Si la mer monte",
"Sous les fraises",
"Slate",
"Training series",
"VBS",
"Vice"]

clients.each do |client|
  Client.create(name: client)
end

puts "Done creating clients!"

puts "Creating projects (vignettes)..."

projects = [
"On the beach",
"WWC",
"Les belles rives",
"27 rosiers",
"Cabourg mon amour",
"Kaki",
"EPC",
"La Parisienne",
"Monaco",
"Welcome Book",
"ensemble",
"Logos (Collection) 2017-2019"
]

projects.each do |project|
  Project.create(title: project,
    description: "Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.",
    time: "03:14",
    slug: project.downcase.split.join("-"))
end

puts "Done creating projects (vignettes)!"


puts "Creating user..."
User.create(email: "cbarand@midiquinze.com", password: "MidiQuinze2019!!", admin: true)
puts "Done creating user..."


