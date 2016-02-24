# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.new

user.username = "adutta"
user.password = "password"

user.save!


5.times do
  song = Song.new

  song.title = Faker::Book.title
  song.description = Faker::Hacker.say_something_smart
  song.artist_id = 1
  song.album_id = 1
  song.filename = "audio.m4a"

  song.save!
end
