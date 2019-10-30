# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating team members..."
cléo = Member.create(name: "Cléo Barand", role: "ART DIRECTOR")
romain = Member.create(name: "ROMAIN BELLEVILLE", role: "CREATIVE DIRECTOR + CO-FOUNDER")
jérémie = Member.create(name: "JÉRÉMIE BŒGLIN", role: "CREATIVE DIRECTOR + CO-FOUNDER")
gwendoline = Member.create(name: "GWENDOLINE RAVET", role: "CLIENT DIRECTOR")
laura = Member.create(name: "LAURA JOVELIN", role: "ART DIRECTOR JR")
léa = Member.create(name: "LÉA RETAILLEAU", role: "ASSISTANT ART DIRECTOR")
puts "Done creating team members!"
