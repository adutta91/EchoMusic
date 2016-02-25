json.array! (@songs) do |song|
  json.title song.title
  json.artise_name song.artist_name
  json.id song.id
end
