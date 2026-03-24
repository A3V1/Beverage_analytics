# Red Bull Experience Analytics Website

A demo React application inspired by Red Bull's high-energy brand, designed to showcase advanced user behavior analytics and conversion funnel tracking.

## 🚀 Features

- **High-Energy UI**: Sports and adrenaline-themed design
- **Product Showcase**: Red Bull Original, Sugar Free, and Editions
- **Event Tracking**: F1, Air Racing, Cliff Diving, and more
- **Analytics Integration**: Custom tracking system for user behavior
- **Conversion Funnel**: Home → Product → Checkout flow

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

4. **Lint the code:**

   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

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

## 🔧 Customization

To integrate with real analytics services:

1. Replace console.log in `tracker.js` with your analytics provider
2. Add proper event mapping for your specific needs
3. Implement server-side tracking if required

---

Built with ❤️ for demonstrating analytics expertise
