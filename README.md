# PULSENOTE

**PulseNote** is a full-stack medical journal application that allows patients to log medication intake, track daily conditions, and optionally record personal health diaries, enabling doctors to review structured, printable medical summaries for smoother check-ups.

---

## Inspiration

This project was created in the appearance of my mother's codition having had 2 strokes in the past 2 months. Seeing the amount of medication and tracking all the vitals like blood pressure, glucose levels and such, and having to explain to the doctore every check all the updates that are need for the upcomming check up made it abit of a hassle so I said what if there was and application that solves this and impliments an AI assistant to help explain and add reminders to users to take there medicine and ask if the users have taken their medicines.
Here’s a clear way to continue your README while keeping it professional, structured, and readable. I’ll give you the next sections and suggestions for content you can add:

---

## Challenges

- Implementation of AI for personalized assistance and recommendations
- Structuring a scalable database to handle patients, medications, and intake logs efficiently
- Implementing an accessible and user-friendly front-end design
- Ensuring strict data privacy and security in compliance with health data regulations
- Synchronizing real-time updates between patients and doctors
- Handling edge cases like medication conflicts, reminders, and historical data

---

## Features

- Patient registration and secure authentication
- Medication logging with dosage, frequency, and schedule tracking
- AI-assisted guidance for medication reminders and health summaries
- Doctor dashboard to view patient history and generate printable medical reports
- Health diary for tracking vitals, symptoms, and personal notes
- Searchable medication database with auto-correct and suggestion functionality

---

## Tech Stack

**Frontend:** React, Tailwind CSS, accessible design components
**Backend:** Node.js, Express, Mongoose (MongoDB)
**AI Integration:** Gemini API for assistance and natural language processing
**Authentication & Security:** JWT, bcrypt, Helmet, HPP
**Deployment & Environment:** Docker (optional), dotenv for environment management

---

## Database Structure

TODO: still in development

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with your MongoDB URI and other secrets:

   ```env
   PORT=3000
   MONGO_URI=<your-mongo-uri>
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

5. Access the app at `http://localhost:3000`

---

## Future Improvements

- Full AI assistant integration for medication advice and health summary explanations
- Advanced reporting and analytics for doctors
- Multi-language support for patients and doctors
- Offline mode for medication logging and vitals tracking
