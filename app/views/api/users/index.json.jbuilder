json.array! (@users) do |user|
  json.username user.username
  json.description user.description
  json.id user.id
  json.audio_url user.image_url
end
