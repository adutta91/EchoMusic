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

song = Song.new

song.title = "Oviedo"
song.user_id = 1
song.artist_name = "Blind Pilot"
song.album_id = 1
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456429236/bzivyltyvhbor8fin9tv.m4a"

song.save!
