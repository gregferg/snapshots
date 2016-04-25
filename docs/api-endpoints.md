# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `PATCH /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`
  - index of all photos for a album

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photo/:id`
- `PATCH /api/photo/:id`
- `DELETE /api/photo/:id`


### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/albums/:album_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/albums/:album_id/tags/:tag_name`: remove tag from note by
  name
