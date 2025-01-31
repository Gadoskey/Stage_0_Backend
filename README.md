# HNG Stage 0 Backend - Public API That retrieves Basic Information

## Description
A simple public API that returns:
- My registered email.
- The current datetime in ISO 8601 format.
- My GitHub repository URL.

## How to Run Locally

Follow these steps to set up and run the API on your local machine:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Gadoskey/Stage_0_Backend.git
   cd Stage_0_Backend
2. **Install Dependencies**  
   ```bash
   npm install
3. **Start the Server**  
   ```bash
   node index.js
4. **Access the API**  
   ```bash
   http://localhost:3000/


## Endpoint
- **GET** `/`
- **Base URL:** `https://your-api-name.vercel.app/`


## Response Format
``` json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Reference
[HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)