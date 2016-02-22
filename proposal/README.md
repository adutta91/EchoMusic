
# SoundCloud Clone

Heroku link


## Minimum Viable Product

Description: A music sharing and exploration web browser
app built using Ruby and React.js.

Features:
- [ ] Create and manage account
- [ ] Log In / Log out
- [ ] Listen to and explore songs that are in the database
- [ ] Comment on songs
- [ ] Favorite/like songs, which are remembered in their account
- [ ] Upload their own songs



## Design Docs
* [Wireframes][wireframes]
* [Database Schema][schema]
* [Component Hierarchy][components]
* [Flux Stores][stores]
* [API endpoints][endpoints]


[wireframes]: ./docs/Wireframes.md
[schema]: ./docs/schema.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[endpoints]: ./docs/endpoints.md


## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days; Total: 0.5/9 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Generate Models (0.5 days; Total: 1/9 days)

**Objective:** Songs can be uploaded, displayed, and destroyed through
the API.

- [ ] create `Song`, `Artist`, and `Album` models
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for songs (`SongsController`)
- [ ] `Artists` can be a `User` or not


### Phase 3: API, and basic APIUtil (1 day; Total: 2/9 days)
- [ ] jBuilder views for all models
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 4: Flux Architecture and Router (1 day; Total: 3/9 days)

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router

### Phase 5: Main page and Home page components (1 day; Total: 4/9 days)
- implement components, building out the flux loop as needed.
  - [ ] `Header`
  - [ ] `Footer`
  - [ ] `MainImage`
  - [ ] `ExploreIndex`

### Phase 6: User page components (1 day; Total: 5/9 days)
- implement user page components
  - [ ] `UserIndex`
  - [ ] `SuggestionsIndex`
  - [ ] `LikedSongsIndex`


### Phase 7: Song, artist, and album page components (1 day; Total: 6/9 days)
- implement song, artist, and album page components
  - [ ] `SongInfo`
  - [ ] `ArtistInfo`
  - [ ] `ArtistAlbumsIndex`

### Phase 8: Search, and form components (1 day, Total: 7/9 days)
- implement search and form components
  - [ ] `ResultsIndex`
  - [ ] `EditProfileForm`
  - [ ] `UploadSongForm`

### Phase 9: Start Styling (1.5 days; Total: 6.5/9 days)
- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles


### Phase 10: Styling Cleanup and Seeding (1 day; Total, 9/9 days)

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.


### Bonus features (remaining time)
- [ ] Create a queue of songs
- [ ] Songs continue to play as they navigate the site
- [ ] Follow artists
- [ ] Recommended songs based on interests (by genre)
