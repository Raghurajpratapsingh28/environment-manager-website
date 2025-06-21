# Database Setup Guide

This guide will help you set up the PostgreSQL database for the review section.

## Prerequisites

1. **PostgreSQL** installed and running on your system
2. **Node.js** and **npm** installed

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Database Connection

Create a `.env` file in the root directory with your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/environment_manager?schema=public"
```

Replace `username`, `password`, and `environment_manager` with your actual PostgreSQL credentials and database name.

### 3. Generate Prisma Client

```bash
npm run db:generate
```

### 4. Push Database Schema

```bash
npm run db:push
```

This will create the database tables based on the Prisma schema.

### 5. Seed the Database (Optional)

To populate the database with sample reviews:

```bash
npm run db:seed
```

### 6. Start the Development Server

```bash
npm run dev
```

## Database Management

### View Database in Prisma Studio

```bash
npm run db:studio
```

This opens a web interface to view and edit your database data.

### Run Migrations

If you make changes to the schema:

```bash
npm run db:migrate
```

## Database Schema

The review system uses the following schema:

```prisma
model Review {
  id        String   @id @default(cuid())
  name      String
  email     String
  rating    Int      @default(5)
  title     String
  content   String
  avatar    String?
  verified  Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("reviews")
}
```

## API Endpoints

- `GET /api/reviews` - Fetch all reviews
- `POST /api/reviews` - Create a new review

## Troubleshooting

### Common Issues

1. **Connection refused**: Make sure PostgreSQL is running
2. **Authentication failed**: Check your database credentials in `.env`
3. **Database does not exist**: Create the database first in PostgreSQL

### Creating Database

If you need to create the database manually:

```sql
CREATE DATABASE environment_manager;
```

### Reset Database

To reset the database and start fresh:

```bash
npx prisma migrate reset
npm run db:seed
```

## Production Deployment

For production deployment, make sure to:

1. Use a production PostgreSQL instance
2. Set up proper environment variables
3. Run migrations before starting the application
4. Consider using connection pooling for better performance 