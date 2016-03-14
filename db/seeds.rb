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
user.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457302131/nvbylyo0ifkbiywdhlkq.png"
user.description = "I am cool"
user.save!

user = User.new
user.username = "guest"
user.password = "password"
user.description = "This is a guest account - explore away!
You can see the songs you have followed below, and the ones you have uploaded
to the left. Navigate the site using the icons along the header. Some of the
actions available to you are: edit your profile (click on your profile picture),
upload songs (click on the music icon), explore music (click on the logo), and
logout (click the power icon). Enjoy and happy listening!!"
user.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457302131/nvbylyo0ifkbiywdhlkq.png"
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

user = User.new
user.username = Faker::Internet.user_name
user.password = "password"
user.description = Faker::Hacker.say_something_smart
user.save!

# ---------------------------------------------ARTISTS--------------------------
artist = Artist.new
artist.name = "Blind Pilot"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919635/blind_pilot_bfsyxk.jpg"
artist.save!

artist = Artist.new
artist.name = "Nikhil D."
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/nik_d_jlt02m.jpg"
artist.save!

artist = Artist.new
artist.name = "Charlie Parr"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919634/charlie_parr_zx9reo.jpg"
artist.save!

artist = Artist.new
artist.name = "Lucius Fox"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919635/lucius_fox_w80byb.jpg"
artist.save!

artist = Artist.new
artist.name = "Dire Straits"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919635/dire_straits_qe5yji.jpg"
artist.save!

artist = Artist.new
artist.name = "The Beatles"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919634/the_beatles_k1rre6.jpg"
artist.save!

artist = Artist.new
artist.name = "Iron & Wine"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919635/iron_and_wine_ne5kh0.jpg"
artist.save!

artist = Artist.new
artist.name = "Bob Dylan"
artist.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919634/bob_dylan_busjnd.jpg"
artist.save!

# ---------------------------------------------SONGS----------------------------
song = Song.new
song.title = "Oviedo"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869546/Oviedo.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/3_rounds_and_a_sound_ozhp7c.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "3 Rounds and a Sound"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068285/11_3_Rounds_and_a_Sound_rduojq.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/3_rounds_and_a_sound_ozhp7c.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "The Colored Night"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068288/05_The_Colored_Night_mo9t3m.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/we_are_the_tide_vbm2bw.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "We Are The Tide"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068285/04_We_Are_the_Tide_jwcedx.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/we_are_the_tide_vbm2bw.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Paint or Pollen"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068279/03_Paint_or_Pollen_emrjlh.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/3_rounds_and_a_sound_ozhp7c.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "The Story I Heard"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068277/02_The_Story_I_Heard_dyw7rx.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/3_rounds_and_a_sound_ozhp7c.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Go On, Say It"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068269/06_Go_On_Say_It_dj5ce2.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/3_rounds_and_a_sound_ozhp7c.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Look At Miss Ohio"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068265/01_Look_At_Miss_Ohio_Live_rqvc79.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/3_rounds_and_a_sound_ozhp7c.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Keep You Right"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068261/03_Keep_You_Right_ytatyb.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/we_are_the_tide_vbm2bw.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Always"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068252/02_Always_gjlfs2.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/we_are_the_tide_vbm2bw.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Half Moon"
song.artist_name = "Blind Pilot"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068239/01_Half_Moon_gsgwrr.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/we_are_the_tide_vbm2bw.jpg"
song.album_id = rand(1..5)
song.artist_id = 1
song.save!

song = Song.new
song.title = "Oh Madness"
song.artist_name = "Nikhil D."
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869465/Oh%20Madness.mp3"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919634/nik_das_ig9huq.jpg"
song.album_id = rand(1..5)
song.artist_id = 2
song.save!

song = Song.new
song.title = "1922 Blues"
song.artist_name = "Charlie Parr"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869646/1922%20Blues.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/australian_tour_dzkrbs.jpg"
song.album_id = rand(1..5)
song.artist_id = 3
song.save!

song = Song.new
song.title = "Short Clip"
song.artist_name = "Lucius Fox"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1456869740/Short%20Clip.mp3"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457919635/lucius_fox_w80byb.jpg"
song.album_id = rand(1..5)
song.artist_id = 4
song.save!

song = Song.new
song.title = "Brothers in Arms"
song.artist_name = "Dire Straits"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068862/21_Brothers_In_Arms_yurpot.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920369/brothers_in_arms_gyqlde.jpg"
song.album_id = rand(1..5)
song.artist_id = 5
song.save!

song = Song.new
song.title = "Let It Be"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068975/14_Let_It_Be_vwnfwb.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "All You Need Is Love"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068980/11_All_You_Need_Is_Love_mvagh2.mp3"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "While My Guitar Gently Weeps"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068978/1-07_While_My_Guitar_Gently_Weeps_nxcx5b.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Hey Jude"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068976/07_Hey_Jude_azzud1.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Come Together"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068972/01_Come_Together_mho2mq.mp3"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Lucy In The Sky With Diamonds"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068970/03_Lucy_In_The_Sky_With_Diamonds_wdb8na.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Here Comes The Sun"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068968/07_Here_Comes_the_Sun_vmqf8n.mp3"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Eleanor Rigby"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068967/02_Eleanor_Rigby_mxheds.mp3"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Paperback Writer"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068961/03_Paperback_Writer_zwbknj.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "Day Tripper"
song.artist_name = "The Beatles"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457068961/01_Day_Tripper_l4ocqi.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/best_of_the_beatles_mvgjsv.jpg"
song.album_id = rand(1..5)
song.artist_id = 6
song.save!

song = Song.new
song.title = "16, Maybe Less"
song.artist_name = "Iron & Wine"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457069311/05_16_Maybe_Less_keamep.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/cal_ir_wi_fqdyqh.jpg"
song.album_id = rand(1..5)
song.artist_id = 7
song.save!

song = Song.new
song.title = "Tree By The River"
song.artist_name = "Iron & Wine"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457069333/03_Tree_By_the_River_neiiev.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/ir_wine_yoljba.jpg"
song.album_id = rand(1..5)
song.artist_id = 7
song.save!

song = Song.new
song.title = "Red Dust"
song.artist_name = "Iron & Wine"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457069328/04_Red_Dust_q3k9dl.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/cal_ir_wi_fqdyqh.jpg"
song.album_id = rand(1..5)
song.artist_id = 7
song.save!

song = Song.new
song.title = "Boy With a Coin"
song.artist_name = "Iron & Wine"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457069331/09_Boy_With_a_Coin_vo7xdf.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920022/iron_and_wine_ybbcmg.jpg"
song.album_id = rand(1..5)
song.artist_id = 7
song.save!

song = Song.new
song.title = "All Along the Watchtower"
song.artist_name = "Bob Dylan"
song.user_id = rand(1..10)
song.audio_url = "http://res.cloudinary.com/dzyfczxnr/video/upload/v1457069582/1-13_All_Along_the_Watchtower_gxc0ar.m4a"
song.image_url = "http://res.cloudinary.com/dzyfczxnr/image/upload/v1457920506/all_along_yl5gb0.jpg"
song.album_id = rand(1..5)
song.artist_id = 8
song.save!

# ---------------------------------------------FOLLOWS--------------------------
sf = SongFollow.new
sf.user_id = 2
sf.song_id = rand(1..30)
sf.save!

sf = SongFollow.new
sf.user_id = 2
sf.song_id = rand(1..30)
sf.save!

sf = SongFollow.new
sf.user_id = 2
sf.song_id = rand(1..30)
sf.save!

sf = SongFollow.new
sf.user_id = 2
sf.song_id = rand(1..30)
sf.save!

sf = SongFollow.new
sf.user_id = 2
sf.song_id = rand(1..30)
sf.save!
