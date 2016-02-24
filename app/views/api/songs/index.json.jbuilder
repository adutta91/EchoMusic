json.array! (@songs) do |song|
  json.title song.title
  json.description song.description
end
