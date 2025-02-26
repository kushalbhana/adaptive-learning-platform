# Adaptive Learning Platform

## Overview

The Adaptive Learning Platform is an AI-powered educational system that tailors learning content based on user performance. This platform dynamically adjusts difficulty levels, recommends personalized resources, and provides real-time analytics to enhance the learning experience.

## Features

- AI-driven content recommendations
- User performance tracking
- Dynamic difficulty adjustment
- Real-time analytics and insights
- Scalable and modular architecture

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next JS, Prisma ORM, Google Gemini
- **Database:** PostgreSQL
- **Containerization:** Docker, Docker Compose
- **State Management:** Recoil
- **Authentication:** NextAuth.js (JWT-based authentication)

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Fork and Clone the Repository

```sh
# Fork the repository on GitHub
# Clone the forked repository
git clone https://github.com/YOUR_GITHUB_USERNAME/adaptive-learning-platform.git
cd adaptive-learning-platform
```

### 2. Fill Up the `.env` File

Create a `.env` file in the root directory and provide the required environment variables. A sample `.env.example` is available for reference.

### 3. Install Docker Desktop and Run Docker Compose

Ensure Docker Desktop is installed and running, then execute:

```sh
docker compose up
```

This will set up the database and other necessary services.

### 4. Install Dependencies

```sh
npm install
```

### 5. Run Prisma Migrations

```sh
npx prisma migrate dev
```

This applies the latest database migrations.

### 6. Start the Development Server

```sh
npm run dev
```

The application will be available at `http://localhost:3000/`.

## Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

