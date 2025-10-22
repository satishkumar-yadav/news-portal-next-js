# News Portal - Next.js News App

- Github Repo : https://github.com/satishkumar-yadav/news-portal-next-js
- Vercel Deployed Link : https://news-portal-next-js-bice.vercel.app/
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY ; // || "413ee352f5cc4552993c7f999736aff9"  
  const MOCK_API = "https://68f5a9306b852b1d6f14b04e.mockapi.io/news/favorites";

# NewsPortal App

A Next.js 14 + TypeScript + Tailwind CSS News Application that shows trending headlines, allows search, and filtering by category.

## Features

- Browse top headlines
- Search news by keyword
- Filter by categories
- Responsive UI
- Dynamic routes for detail view
- Uses NewsAPI (requires API key)

## Setup

1. Clone the repo.
2. Install dependencies with `npm install`.
3. Create `.env.local` and add your News API key.
4. Run the app via `npm run dev`.

## Dependency

`
pnpm install framer-motion
npm install motion - import { motion } from "motion/react"

npm install next-auth @types/next-auth axios bcrypt

npm install @reduxjs/toolkit react-redux axios
npm install --save-dev @types/react-redux

pnpm install lucide-react

-- dev
pnpm install --save-dev @types/framer-motion
pnpm install --save-dev @types/lucide-react

`

//////////////////////////////////////////////////////////////////////////
Assignment: NewsPortal – Next.js News App

Objective: Build a Next.js web application where users can view the latest news, filter by categories, search for articles, and read full details. This project tests API integration, dynamic routing, state management, and responsive UI design.

Tech Stack: - Next.js (App Router) - TypeScript - Tailwind CSS - Public News API

Pages & Features:

1. Home Page: - Display latest news articles in a card/grid layout. - Each card shows: Headline, Short description, Image, Source name, Published date. - Search bar to filter articles by keyword.

- Optional: Filter by category (Business, Technology, Sports, Health, etc.)

2. News Details Page: - Dynamic route: /news/[id] - Display: Headline, Full description/content, Image, Source and author, Published date.

- Optionally: Add “Share” buttons (Twitter, Facebook,
  LinkedIn).

3. Categories Page (Optional): - Display news based on categories. - Route: /category/[categoryName]

- Example categories: Business, Technology, Sports, Health, Entertainment

API Integration:

1.  NewsAPI:

- Base URL: https://newsapi.org/v2/ - Free API Key required: https://newsapi.org/
- Endpoints: - Top headlines: GET https://newsapi.org/v2/top-
  headlines?country=us&apiKey=YOUR_API_KEY
- Search articles: GET https://newsapi.org/v2/everything?q={query}&apiKey=YOUR_API_KEY
- By category: GET https://newsapi.org/v2/top-
  headlines?country=us&category={category}&apiKey=YOUR_API_KEY

2. GNews API (Alternative Free API):

- Example: GET https://gnews.io/api/v4/top-headlines?topic=technology&token=YOUR_API_KEY
- Includes: title, description, URL, image, source, published date.

3. Mock API for saved favorites (Optional):

- Use MockAPI (https://mockapi.io/) for saving favorite articles.
- Example data: [ { “id”: “1”, “title”: “Breaking News: AI Revolution”, “url”: “https://news.com/article1”, “image”: “https://news.com/image1.jpg” }]

Functional Requirements:

- Dynamic routes for news details page.
- Search functionality on home page.
- Responsive design for desktop, tablet, and mobile.
- Display images correctly with next/image.
- Optionally allow users to save favorite articles in localStorage or mock API.

Bonus Features:

- Dark/light mode toggle.
- Pagination or infinite scroll for news articles.
- Filter articles by source or date.
- Add “Share” buttons for social media.
- Animations using Framer Motion.

Deliverables:

1. GitHub repository with proper commit history.
2. Screen record your project and then submit.
3. README.md including:

- Setup instructions
- Tech stack used
- Features implemented
- Challenges faced

Timeline: - Duration: 4–6 days - Submission: GitHub link + screen recording

Submit to: megha.chauhan@cepialabs.in, sajid.ansari@cepialabs.in

All articles mentioning Apple from yesterday, sorted by popular publishers first
GET
https://newsapi.org/v2/everything? q=apple&from=2025-10-19&to=2025-10-19&sortBy=popularity &apiKey=API_KEY

All articles about Tesla from the last month, sorted by recent first
GET
https://newsapi.org/v2/everything? q=tesla &from=2025-09-20&sortBy=publishedAt&apiKey=API_KEY

Top business headlines in the US right now
GET
https://newsapi.org/v2/top-headlines? country=us&category=business &apiKey=API_KEY

Top headlines from TechCrunch right now
GET
https://newsapi.org/v2/top-headlines? sources=techcrunch &apiKey=API_KEY

All articles published by the Wall Street Journal in the last 6 months, sorted by recent first
GET
https://newsapi.org/v2/everything? domains=wsj.com &apiKey=API_KEY

10. Authentication Flow Summary
    On visiting /favorites or /profile, NextAuth checks SessionProvider context.

Users can sign in with Google, creating a temporary session.

Favorites are stored and retrieved by user email in MockAPI.

State persists via Session + LocalStorage for UX continuity.

//////////////////////

Behavioral Flow
1.When a guest toggles theme, it’s stored in localStorage.

2.When a logged-in user toggles, it updates MockAPI tied to their email.

3.On every login, useDarkMode() automatically restores their saved theme.

4.This works seamlessly across browsers, syncs instantly on login/logout, and persists after refresh.

Example MockAPI “users” Collection Schema
`
[
{
"id": "1",
"email": "alex@cepialabs.in",
"theme": "dark"
},
{
"id": "2",
"email": "megha@cepialabs.in",
"theme": "light"
}
]

`
