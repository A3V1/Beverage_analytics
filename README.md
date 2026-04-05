# Red Bull Experience Analytics Website

A demo React application inspired by Red Bull's high-energy brand, designed to showcase advanced user behavior analytics and conversion funnel tracking.

## 🚀 Live Demo

**View the live site:** https://a3v1.github.io/Beverage_analytics/

## 📊 Analytics Strategy

This project demonstrates production-level analytics implementation:

### Tracked Events
- Page views and navigation
- Product clicks and views
- Buy button interactions
- Scroll depth tracking
- Time spent on pages
- Conversion funnel progress

### Funnel Tracking
```
Home Visit → Product Click → View Product → Buy Click → Checkout
```

## 🛠️ Tech Stack

- **React** with React Router
- **Vite** for build tooling
- **ESLint** for code quality
- Custom analytics tracker (demo implementation)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

- **Build Command:** `npm run build`
- **Deploy Branch:** `gh-pages`
- **Live URL:** https://a3v1.github.io/Beverage_analytics/

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── EventCard.jsx
│   └── CTA.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Events.jsx
│   ├── ProductDetail.jsx
│   └── Checkout.jsx
├── analytics/
│   └── tracker.js
├── App.jsx
└── main.jsx
```

## 🎯 Analytics Implementation

The `analytics/tracker.js` file contains a custom analytics system that:

- Tracks user interactions across the site
- Monitors conversion funnel progress
- Logs events to console (easily replaceable with GA, Mixpanel, etc.)
- Tracks scroll depth and time spent

## 📈 Portfolio Value

This project stands out by:

- **Design for Tracking**: UI built with analytics in mind
- **Real User Behavior**: Demonstrates actual user journey tracking
- **Insights Focus**: Shows how to extract meaningful insights from data
- **Production Ready**: Clean code, proper routing, component structure

## ⚠️ Important Note

This is a **demo/inspired project** for portfolio purposes only. It is not affiliated with or an official representation of Red Bull or their products.

---

Built with ❤️ for demonstrating analytics expertise