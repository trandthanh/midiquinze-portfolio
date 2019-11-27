# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "Creating team members..."
# cléo = Member.create(name: "Cléo Barand", role: "ART DIRECTOR")
# romain = Member.create(name: "ROMAIN BELLEVILLE", role: "CREATIVE DIRECTOR + CO-FOUNDER")
# jérémie = Member.create(name: "JÉRÉMIE BŒGLIN", role: "CREATIVE DIRECTOR + CO-FOUNDER")
# gwendoline = Member.create(name: "GWENDOLINE RAVET", role: "CLIENT DIRECTOR")
# laura = Member.create(name: "LAURA JOVELIN", role: "ART DIRECTOR JR")
# léa = Member.create(name: "LÉA RETAILLEAU", role: "ASSISTANT ART DIRECTOR")
# puts "Done creating team members!"

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
"Just Do It",
"On the beach",
"wwc",
"Les belles rives",
"27 rosiers",
"Cabourg mon amour"
]

projects.each do |project|
  Project.create(title: project,
    description: "Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.",
    time: "03:14",
    slug: project.downcase.split.join("-"))
end

puts "Done creating projects (vignettes)!"


