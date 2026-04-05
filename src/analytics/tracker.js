// Analytics Tracker for Beverage Store Website
// This is a demo tracker - in production, integrate with Google Analytics, Mixpanel, etc.

class AnalyticsTracker {
  constructor() {
    this.events = [];
    this.funnel = {
      homepage_visit: false,
      product_click: false,
      view_product: false,
      buy_click: false,
      checkout: false
    };
  }

  // Track an event
  trackEvent(eventName, category, label, value = null) {
    const event = {
      eventName,
      category,
      label,
      value,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    };

    this.events.push(event);
    console.log('Analytics Event:', event);

    // Update funnel
    this.updateFunnel(eventName, label);

    // In production, send to analytics service
    // gtag('event', eventName, { event_category: category, event_label: label });
  }

  // Update conversion funnel
  updateFunnel(eventName, label) {
    switch (eventName) {
      case 'page_view':
        if (label === 'home') this.funnel.homepage_visit = true;
        break;
      case 'product_click':
        this.funnel.product_click = true;
        break;
      case 'view_product':
        this.funnel.view_product = true;
        break;
      case 'buy_click':
        this.funnel.buy_click = true;
        break;
      case 'checkout':
        this.funnel.checkout = true;
        break;
    }
    console.log('Funnel Progress:', this.funnel);
  }

  // Track scroll depth
  trackScrollDepth() {
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const scrollPercent = Math.round((scrolled / (document.body.scrollHeight - window.innerHeight)) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll >= 25 && maxScroll < 50) {
          this.trackEvent('scroll_depth', 'engagement', '25%');
        } else if (maxScroll >= 50 && maxScroll < 75) {
          this.trackEvent('scroll_depth', 'engagement', '50%');
        } else if (maxScroll >= 75 && maxScroll < 100) {
          this.trackEvent('scroll_depth', 'engagement', '75%');
        } else if (maxScroll >= 100) {
          this.trackEvent('scroll_depth', 'engagement', '100%');
        }
      }
    });
  }

  // Track time spent on page
  trackTimeSpent() {
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('time_spent', 'engagement', window.location.pathname, timeSpent);
    });
  }

  // Get all tracked events
  getEvents() {
    return this.events;
  }

  // Get funnel status
  getFunnel() {
    return this.funnel;
  }
}

// Create global instance
const tracker = new AnalyticsTracker();

// Initialize tracking
tracker.trackScrollDepth();
tracker.trackTimeSpent();

// Export for use in components
export default tracker;