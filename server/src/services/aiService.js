//all ai communication happens here
import OpenAI from 'openai';

//open ai configuration
const client = new OpenAI({
  apiKey: process.env.OPEN_ROUTER_AI_APIKEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

export const generateProductTags = async (description) => {
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `You are an AI assistant for a sustainable e-commerce platform.

Based on the product description below, return structured JSON with:

1. category (choose from: packaging, home, personal_care, food, office)
2. sub_category
3. tags (5-10 tags)
4. sustainability_filters (choose from: plastic-free, compostable, vegan, recycled, biodegradable)

Product Description:
${description}

Return ONLY valid JSON in this format:

{
 "category": "",
 "sub_category": "",
 "tags": [],
 "sustainability_filters": []
}`,
        },
      ],
    });

    return response?.choices[0]?.message?.content;
  } catch (error) {
    console.log('Error occured while getting response from ai', error);
  }
};
