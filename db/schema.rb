# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160301235057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",          null: false
    t.text     "description"
    t.string   "image_filename"
    t.integer  "artist_id",      null: false
    t.integer  "genre_id",       null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "albums", ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  add_index "albums", ["genre_id"], name: "index_albums_on_genre_id", using: :btree

  create_table "artists", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "image_filename", null: false
    t.text     "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "artists", ["name"], name: "index_artists_on_name", using: :btree

  create_table "genres", force: :cascade do |t|
    t.string   "type",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "song_follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "song_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "song_follows", ["song_id"], name: "index_song_follows_on_song_id", using: :btree
  add_index "song_follows", ["user_id"], name: "index_song_follows_on_user_id", using: :btree

  create_table "songs", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "album_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id",     null: false
    t.string   "artist_name"
    t.string   "audio_url"
  end

  add_index "songs", ["album_id"], name: "index_songs_on_album_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.text     "description"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
