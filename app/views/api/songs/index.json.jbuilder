json.array! (@songs) do |song|
  json.title song.title
  json.artist_name song.artist_name
  json.id song.id
  json.audio_url song.audio_url
end
