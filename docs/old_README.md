# Snapshots

[Heroku link][heroku] **NB:** Snapshots!

[heroku]: https://snapshotapp.herokuapp.com/


Snapshots is a web application inspired by Smugmug that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Smugmug-inspired site: Album creation and saving, Album/Photo editing, Module Photo Detail View
- [x] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Snapshots will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Title and Description for Albums/Photos (MVP)
- [x] Upload, edit, and delete Albums/Photos (MVP)
- [ ] Organize Photos within Albums (MVP)
- [ ] Module Photo View (MVP)
- [ ] Choose multiple layouts for Home and Album viewing pages (expected feature, but not MVP)
- [ ] Editable About Me Page (expected feature, but not MVP)
- [ ] Editable Contact Me Page (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [x] create `Photo` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for photos (`PhotosController`)
- [x] jBuilder views for photos
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] working with cloudinary uploads.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [x] `PhotosIndex`
  - [x] `PhotoIndexItem`
  - [ ] `PhotoForm`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Albums (1 day)

**Objective:** Photos belong to Albums, and can be viewed by Album.

- [x] create `Album` model
- build out API, Flux loop, and components for:
  - [x] Album CRUD
  - [x] adding photos requires a album  
  - [x] viewing photos by album
  - Use CSS to style new views
Phase 3 adds orgnization to the Photos. Photos belong to a Album,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for album  - [ ] adding tags to album  - [ ] creating tags while adding to album
  - [ ] searching album by tag
- [ ] Style new element
### Phase 7: Allow Complex Styling in Photos (0.5 days)

**objective:** Enable complex styling of photos.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Multiple Layouts for Photos or Albums
- [ ] Set tags on photos/albums
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
