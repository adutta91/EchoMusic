json.array! (@artist.songs) do |song|
  json.title song.title
  json.artist_name song.artist_name
  json.id song.id
  json.audio_url song.audio_url
  json.artist_id song.artist_id
  json.user_id song.user_id
end
