# Flat Sharing Application

[Live URL](https://flat-share-server-bice.vercel.app/)

## Features

- User Registration and Login: Users can create an account and log in to the application. This is handled using JWT for authentication.

- Flat Booking: Users can send a request to book a flat. The application checks if the user has already booked the flat before creating the booking.

- Update Booking Status: Users can update the status of their booking.

- User Profile: Users can view their profile, which includes personal information.

- Update Profile: Users can update their profile information, such as their name, email address, and password.

## Technology Used

- Programming Language: TypeScript
- Web Framework: Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)

## Setup

1. Clone the repository: `git clone https://github.com/MehediMubin/flat-share-server.git`
2. Navigate into the project directory: `cd your-repo`
3. Install the dependencies: `npm install`
4. Copy the .env.example file to a new file named .env and fill in your environment variables
5. Start the server: `npm run start:dev`
6. Open your browser and navigate to `http://localhost:5000`
