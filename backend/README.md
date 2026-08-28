# Backend

## Setup/Install

```bash
npm install
npm run build
npm start
```

## Running the server

Default port: `3000` (override with `PORT`).

```bash
npm start
```

## Frontend testing

Open `http://localhost:3000/index.html`.

- **Create**: fill the *Create* form (title, content) and submit.
- **Retrieve**: click *Get All* or enter an ID and click *Get Note*.
- **Update**: enter the note ID and new values in the *Update* form and submit.
- **Delete**: enter the ID and click *Delete*.

Results appear in the output area.

## Endpoint reference

- `POST /notes` – create note
- `GET /notes` – list all
- `GET /notes/:id` – get one
- `PUT /notes/:id` – update
- `DELETE /notes/:id` – delete
