

### My Flow (How I Built It) till now 
So first I made a basic express server, just to see if things were working.

Then I got the API key from Gemini (Google AI Studio), saved it in a .env file using dotenv.

After that, I made the routes and controllers — tried connecting them, tested the endpoint with a prompt... and it worked ✅

Then I added Gemini model logic using @google/genai. I used gemini-1.5-flash to get answers from the prompt.

