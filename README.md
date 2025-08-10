# rust-map-api

A simple Express REST API written in TypeScript that accesses Rust maps data.

## Running the App Locally

### Prerequisites

- Node.js (v14 or later) and npm installed

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a **.env** file in the project root to set environment variables (get API KEY from `https://www.rustmaps.com`):

   ```env
   API_KEY=xxxxx
   ```

3. To run in development mode with hot reloading:

   ```bash
   npm run dev
   ```

4. To build and run in production:

   ```bash
   npm run build
   npm start
   ```

The server will start on `http://localhost:3001` by default.

## API Endpoints

### POST /api/getmaps

This endpoint calls the external Rust maps API to search for maps based on the given criteria. It requires a JSON payload with a `page` field.

#### Request Example

- **URL:** `http://localhost:3001/api/getmaps`
- **Method:** POST
- **Headers:** `Content-Type: application/json`
- **Body:**

  ```json
  {
    "page": 0
  }
  ```

#### Response

The response returns JSON data from the external API. For further details, refer to the implementation in `src/routes/index.ts`.

---

### POST /api/randomseed

This endpoint calls the `/getmaps` API internally to fetch maps, then selects a random map seed. It does not require any payload.

#### Request Example

- **URL:** `http://localhost:3001/api/randomseed`
- **Method:** POST
- **Headers:** `Content-Type: application/json`

#### Response

The response returns a seed (number) selected from one of the maps.

## Deploying to Docker

The project includes a Dockerfile that sets up the production environment.

### Build the Docker Image

From the project root, run:

```bash
docker build -t oakis/rust-map-api:latest .
```

### Run the Docker Container

You can run the container (mapped to port 3001) using:

```bash
docker run -d -p 3001:3001 --name rust-map-api oakis/rust-map-api:latest
```
