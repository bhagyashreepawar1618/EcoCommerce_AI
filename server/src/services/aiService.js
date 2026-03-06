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

export const generateProductImpact = async (product_name, quantity) => {
  try {
    const impactresponse = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `You are an AI sustainability analyst for an eco-commerce platform.

Given the product name and quantity, estimate the environmental impact.

Product Name: ${product_name}
Quantity: ${quantity}

Return ONLY valid JSON in the following format:

{
  "plastic_saved": "estimated plastic saved in grams",
  "carbon_avoided": "estimated carbon avoided in grams",
  "impact_statement": "short human readable sustainability statement"
}

Rules:
- Plastic saved should be a logical estimation.
- Carbon avoided should be a logical estimation.
- Impact statement should explain the environmental benefit in 1-2 sentences.
- Do NOT return anything except JSON.`,
        },
      ],
    });

    console.log(
      'responsee of aii=',
      impactresponse?.choices[0]?.message?.content
    );
    return impactresponse?.choices[0]?.message?.content;
  } catch (error) {
    console.log('Error occured while generating Impact ', error);
  }
};
