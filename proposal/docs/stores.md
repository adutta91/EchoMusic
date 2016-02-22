# Flux Stores

### SongStore
Holds all persisted song data

##### Actions:
- `receiveAllSongs`
- `receiveSingleSong`
- `removeSong`

##### Listeners:
- `ExploreIndex`
- `ProfileComponent`
  - `UserIndex`
  - `SuggestionsIndex`
  - `LikedSongsIndex`
- `SongInfoComponent`
- `ResultsIndex`


### ArtistStore
Holds all persisted artist data

##### Actions:
- `receiveAllArtists`
- `receiveSingleArtist`
- `removeArtist`

##### Listeners:
- `ArtistInfoComponent`

### AlbumStore
Holds all persisted album data

##### Actions:
- `receiveAllAlbums`
- `receiveSingleAlbum`
- `removeAlbum`

##### Listeners:
- `ArtistAlbumsInfo`

### SearchStore
Holds search parameters to send to the API

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchForm`
