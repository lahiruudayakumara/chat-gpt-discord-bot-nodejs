# Discord Bot with OpenAI Integration

This Discord bot uses the Discord.js library for Discord interactions and the OpenAI API for generating responses based on messages received.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/lahiruudayakumara/chat-Gpt-Discord-Bot-nodejs.git

2. Install dependencies:

   ```bash
   npm install
   
3. Create a .env file in the root directory and add your environment variables:
     ```bash
    DISCORD_BOT_TOKEN=your_discord_bot_token
    OPENAI_ORGANIZATION_ID=your_openai_organization_id
    OPENAI_API_KEY=your_openai_api_key

4. Run the bot:
    ```bash
    node index.js

### Usage

Once the bot is running and connected to your Discord server, it will listen for messages. When a message is received, it will use the OpenAI API to generate a response based on the content of the message and reply to it in the same channel.


