json.array! (@songs) do |song|
  json.title song.title
  json.description song.description
  json.id song.id
end
