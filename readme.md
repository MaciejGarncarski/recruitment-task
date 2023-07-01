# Streamer Spotlight

Streamer Spotlight is an app where you can add your favorite streamers and give them upvotes/downvotes.

## Installation and running

```bash
# in repo folder

# start backend dev server
cd backend && yarn install && yarn dev

# start frontend dev server
cd frontend && yarn install && yarn dev
```

## Tech used

- Backend

  - Express
  - TypeScript
  - sqlite ( database is in file `./backend/prisma/database.db` )
  - Prisma
  - socket.io (websockets)
  - zod

- Frontend
  - React
  - react-query
  - react-router
  - react-hook-form
  - zod
  - sass
  - framer-motion
  - axios
