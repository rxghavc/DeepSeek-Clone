# DeepSeek Clone

DeepSeek is a full-stack MERN (MongoDB, Express, React, Node.js) project that provides a seamless user experience for managing and interacting with AI-powered chat functionalities. This project leverages modern technologies like Next.js, Tailwind CSS, and Clerk for authentication.

## Features
- AI-powered chat using OpenAI's API.
- User authentication and management with Clerk.
- Responsive design with Tailwind CSS.
- MongoDB for database management.

## Prerequisites
Before cloning and running this project, ensure you have the following installed on your system:
- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## Getting Started
Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

### 2. Install Dependencies
Install the required dependencies using npm or yarn. For a detailed list of dependencies, refer to the [Dependencies](#dependencies) section at the bottom of this README:
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
MONGODB_URI=your_mongodb_connection_string
SIGNING_SECRET=your_signing_secret
DEEPSEEK_API_KEY=your_deepseek_api_key
```
Replace the placeholder values with your actual credentials.

### 4. Run the Development Server
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### 5. Build for Production
To build the application for production, run:
```bash
npm run build
```

### 6. Start the Production Server
After building, you can start the production server:
```bash
npm start
```

## Dependencies

The following dependencies are required to run this project:

### Production Dependencies
- `@clerk/nextjs`: ^6.14.3
- `axios`: ^1.8.4
- `mongoose`: ^8.13.2
- `next`: 15.3.0
- `openai`: ^4.93.0
- `prismjs`: ^1.30.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-hot-toast`: ^2.5.2
- `react-markdown`: ^10.1.0
- `svix`: ^1.64.0

### Development Dependencies
- `@eslint/eslintrc`: ^3
- `@tailwindcss/postcss`: ^4
- `autoprefixer`: ^10.4.21
- `eslint`: ^9
- `eslint-config-next`: 15.3.0
- `postcss`: ^8.5.3
- `tailwindcss`: ^4.1.3

To install all dependencies, run:
```bash
npm install
```

## Folder Structure
- `app/`: Contains the Next.js application files.
- `components/`: Reusable React components.
- `config/`: Configuration files, including database connection.
- `context/`: React context for global state management.
- `models/`: Mongoose models for MongoDB collections.
- `assets/`: Static assets like images and icons.
- `public/`: Publicly accessible files.

## Screenshots

![image](https://github.com/user-attachments/assets/467c8112-fbf9-461c-b54c-f8c523a82963)
![image](https://github.com/user-attachments/assets/0bb5704a-7b97-4667-a6b5-ad4322f0feec)
![image](https://github.com/user-attachments/assets/06b1af42-efdb-4b3e-96cb-1fbd555aa4b6)
![image](https://github.com/user-attachments/assets/cd48b430-be67-494d-9e14-b62ff8ebe13e)
![image](https://github.com/user-attachments/assets/ed3a2046-de7d-4c14-a249-edb4fc92c680)
![image](https://github.com/user-attachments/assets/7cf71e4a-ac03-4660-a494-fdc64fbdd609)

## Acknowledgments
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/)
- [OpenAI](https://openai.com/)
- [GreatStack](https://www.youtube.com/watch?v=uJPa_18Zf1I&t=12081s&pp=ygUKR3JlYXRTdGFjaw%3D%3D)
