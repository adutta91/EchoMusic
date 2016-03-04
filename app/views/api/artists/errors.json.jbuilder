json.array! (@artist.errors.full_messages) do |message|
  json.message message
end
