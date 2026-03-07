# 🌱 EcoCommerce AI

AI-powered tool that helps generate **product categories, SEO tags, and sustainability impact insights** for eco-friendly e-commerce products.

This project demonstrates how **AI can assist e-commerce platforms** in organizing products and highlighting sustainability information automatically.

---

## 🌐 Live Demo

Frontend:  https://eco-commerce-ai.vercel.app/


Backend API:   https://ecocommerce-ai.onrender.com

---
#Screenshots

<img width="1000" height="866" alt="image" src="https://github.com/user-attachments/assets/61ad887f-0f79-43f6-9355-7f05a2ee019a" />

<img width="1000" height="848" alt="image" src="https://github.com/user-attachments/assets/82d2a525-7413-4fd3-815b-5a3021e92569" />

<img width="1000" height="864" alt="image" src="https://github.com/user-attachments/assets/e3fe7353-ac21-4d29-8004-abfa22e987e3" />




## 🚀 Features

- 🔐 **User Authentication** (Login with JWT)
- 🤖 **AI Product Tag Generator**
  - Generates product **category**
  - Generates **sub-category**
  - Generates **SEO tags**
  - Generates **sustainability filters**
- 🌍 **AI Sustainability Impact Generator**
  - Explains environmental impact of products
- 🎨 **Clean UI built with React + Tailwind**
- ⚡ **Fast backend with Express + OpenAI**

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- OpenAI API

### Deployment
- Frontend → Vercel  
- Backend → Render

---

## 📂 Project Structure

```
EcoCommerce_AI
│
├── Frontend
|
├── server
│
├──.gitignore
└── README.md
```


## 🧠 AI Capabilities

### 1️⃣ Product Tag Generator

Input:
- Product Name
- Product Description

AI generates:
- Product Category
- Sub Category
- SEO Tags
- Sustainability Filters

---

### 2️⃣ Sustainability Impact Generator

AI analyzes the product and generates a **short sustainability impact explanation** such as:

- Environmental benefits
- Eco-friendly materials
- Carbon footprint awareness
---

## 🤖 AI Prompt Design & Integration

All AI communication is handled in `ai.js`. Structured prompts are sent to OpenAI, and JSON responses are returned for backend processing.

### 1️⃣ Product Tag Generator

```javascript
import OpenAI from 'openai';

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
    console.log('Error occurred while getting response from AI', error);
  }
};
## 📌 Future Improvements

- Product recommendation system
- AI product description generator
- Product sustainability scoring

---
---

```
## ⚙️ Environment Variables

### Frontend (.env)

```
VITE_BACKEND_URL=https://your backend
```

```
VITE_BACKEND_URL=https://your-backend.onrender.com
```

---

### Backend (.env)

```
PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_key
CORS_ORIGIN=your_frontend_url
```

---

## 💻 Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/EcoCommerce_AI.git
cd EcoCommerce_AI
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---
## 👩‍💻 Author

**Bhagyashree Pawar**

Full Stack Developer | AI Enthusiast

---

⭐ If you like this project, feel free to **star the repository**!

