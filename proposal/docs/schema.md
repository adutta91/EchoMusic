# Schema information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null, indexed, unique
image_filename| string  |
description   | text   |
password_digest | string   | not null
session_token    | string   | not null, indexed, unique

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description        | text      |
filename   | string   | not null
artist_id | integer   | not null, foreign key, indexed
album_id | integer   | not null, foreign key, indexed


## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name       | string    | not null, indexed
image_filename        | string      |
description   | text   |

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description        | text      |
image_filename   | string   |
artist_id | integer   | not null, foreign key, indexed
genre_id | integer   | not null, foreign key, indexed

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type       | string    | not null
