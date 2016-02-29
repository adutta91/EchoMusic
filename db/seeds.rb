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

user = User.new
user.username = "guest"
user.password = "password"
user.save!

song = Song.new
song.title = "Oviedo"
song.artist_name = "Blind Pilot"
song.user_id = 1
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456435988/ofl1g5t7npnjfdsg4uif.m4a"
song.album_id = 1
song.save!

song = Song.new
song.title = "Oh Madness"
song.artist_name = "Nikhil D."
song.user_id = 2
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456437716/mokiiyp9pcgajnbuok4d.mp3"
song.album_id = 2
song.save!

song = Song.new
song.title = "1922 Blues"
song.artist_name = "Charlie Parr"
song.user_id = 1
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456443974/k4bbmctbv81ok6o4yqvp.m4a"
song.album_id = 3
song.save!

song = Song.new
song.title = "Short Clip"
song.artist_name = "Lucius Fox"
song.user_id = 2
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456511390/dytad9rkdn5zuzymukd0.mp3"
song.album_id = 1
song.save!
