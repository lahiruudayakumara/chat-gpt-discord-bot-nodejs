require('dotenv').config(); // Load environment variables from .env file

// Import necessary modules
const { Client, GatewayIntentBits }  = require('discord.js');
const OpenAIApi = require('openai');
const Configuration = require('openai')

// Create a new Discord client instance
const client = new Client({
    // Define the intents required by the bot
    intents: [
        GatewayIntentBits.Guilds, // Required to access server information
        GatewayIntentBits.GuildMessages, // Required to access messages within servers
        GatewayIntentBits.MessageContent, // Required to access message content
    ]
});

// Instantiate Configuration with your OpenAI API credentials
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_ID, // Your OpenAI organization ID
    apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key
})

// Create a new OpenAI API instance with the configuration
const openai = new OpenAIApi(configuration);

// Event handler for when the bot is ready
client.on('ready', () => {
    const BOT_VERSION = '1.0.0';
    
    console.info(`Logged in as ${client.user.tag}`);
    console.log(`Discord Call Bot v${BOT_VERSION} is now connected and ready.`);
});

// Event handler for when a message is received
client.on('messageCreate', async function(message) {
    // Use the openai object to create a completion
    try {

        if(message.author.bot) return; // Ignore messages from bots to prevent infinite loops

        const response = await  openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            prompt: `Hey Give me a response this : ${message.content}`,
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        });

        // Reply with the generated response
        message.reply(`${response.data.choices[0].text}`);
        } catch (error) {
            console.log(error);
        }
    })
// Log in the bot using the provided Discord bot token from environment variables
client.login(process.env.DISCORD_BOT_TOKEN);