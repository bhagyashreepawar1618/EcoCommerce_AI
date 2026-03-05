//all ai communication happens here
import OpenAI from 'openai';

//open ai configuration
const client = new OpenAI({
  apiKey: process.env.OPEN_ROUTER_AI_APIKEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

export const testAiConnection = async () => {
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:
            'Generate 3 eco-friendly product tags for bamboo toothbrush.',
        },
      ],
    });

    console.log('Ai response =', response.choices[0].message.content);
  } catch (error) {
    console.log('Error occured while getting response from ai', error);
  }
};
