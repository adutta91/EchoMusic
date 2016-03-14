json.array! (@artists) do |artist|
  json.name artist.name
  json.description artist.description
  json.id artist.id
  json.image_url artist.image_url
end
