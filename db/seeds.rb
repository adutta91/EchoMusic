# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# ---------------------------------------------USERS----------------------------
user = User.new
user.username = "adutta"
user.password = "password"
user.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1456878559/arfxlgnwtqdi1rsakzmr.png"
user.description = "I am cool"
user.save!

user = User.new
user.username = "guest"
user.password = "password"
user.description = "This is a guest account - explore away!"
user.save!

# ---------------------------------------------SONGS----------------------------
song = Song.new
song.title = "Oviedo"
song.artist_name = "Blind Pilot"
song.user_id = 1
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869546/Oviedo.m4a"
song.album_id = 1
song.artist_id = 1
song.save!

song = Song.new
song.title = "Oh Madness"
song.artist_name = "Nikhil D."
song.user_id = 2
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869465/Oh%20Madness.mp3"
song.album_id = 2
song.artist_id = 2
song.save!

song = Song.new
song.title = "1922 Blues"
song.artist_name = "Charlie Parr"
song.user_id = 1
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869646/1922%20Blues.m4a"
song.album_id = 3
song.save!

song = Song.new
song.title = "Short Clip"
song.artist_name = "Lucius Fox"
song.user_id = 2
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869740/Short%20Clip.mp3"
song.album_id = 2
song.save!

# ---------------------------------------------FOLLOWS--------------------------
sf = SongFollow.new
sf.user_id = 1
sf.song_id = 2
sf.save!
