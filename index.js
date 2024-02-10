require('dotenv').config(); // Load environment variables from .env file

const { Client, GatewayIntentBits }  = require('discord.js'); // Import necessary modules

// Create a new Discord client instance
const client = new Client({
    // Define the intents required by the bot
    intents: [
        GatewayIntentBits.Guilds, // Required to access server information
        GatewayIntentBits.GuildMessages, // Required to access messages within servers
        GatewayIntentBits.MessageContent, // Required to access message content
    ]
});

// Event handler for when a message is received
client.on('messageCreate', async function(message) {
    try {
        console.log(message.content);
    } catch (error) {
        console.log(error);
    }
})

// Log in the bot using the provided Discord bot token from environment variables
client.login(process.env.DISCORD_BOT_TOKEN);