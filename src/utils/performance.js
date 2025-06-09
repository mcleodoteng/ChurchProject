// Performance monitoring utilities

// Core Web Vitals metrics
export const getCLS = () => {
  return new Promise((resolve) => {
    let CLS = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          CLS += entry.value;
        }
      }
      resolve(CLS);
    }).observe({ type: "layout-shift", buffered: true });
  });
};

export const getLCP = () => {
  return new Promise((resolve) => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      resolve(lastEntry.startTime);
    }).observe({ type: "largest-contentful-paint", buffered: true });
  });
};

export const getFID = () => {
  return new Promise((resolve) => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      resolve(entries[0].processingStart - entries[0].startTime);
    }).observe({ type: "first-input", buffered: true });
  });
};

// Custom performance hooks
export const usePerformanceMonitor = () => {
  const logMetrics = async () => {
    try {
      const cls = await getCLS();
      const lcp = await getLCP();
      const fid = await getFID();

      console.log("Performance Metrics:", {
        CLS: cls.toFixed(3),
        LCP: `${(lcp / 1000).toFixed(2)}s`,
        FID: `${fid.toFixed(1)}ms`,
      });

      // Send to analytics if needed
      // sendToAnalytics({ cls, lcp, fid });
    } catch (error) {
      console.error("Error measuring performance:", error);
    }
  };

  return { logMetrics };
};

// Component render timing
export const measureRenderTime = (Component) => {
  return function WrappedComponent(props) {
    const startTime = performance.now();
    const result = Component(props);
    const endTime = performance.now();

    console.log(
      `${Component.name} render time: ${(endTime - startTime).toFixed(2)}ms`
    );
    return result;
  };
};

// Image loading performance
export const trackImagePerformance = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    const startTime = performance.now();

    img.onload = () => {
      const loadTime = performance.now() - startTime;
      resolve({
        url: imageUrl,
        loadTime: `${loadTime.toFixed(2)}ms`,
        size: img.width * img.height,
      });
    };

    img.src = imageUrl;
  });
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (performance.memory) {
    const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
    return {
      used: `${(usedJSHeapSize / 1048576).toFixed(2)}MB`,
      total: `${(totalJSHeapSize / 1048576).toFixed(2)}MB`,
      percentage: `${((usedJSHeapSize / totalJSHeapSize) * 100).toFixed(1)}%`,
    };
  }
  return null;
};

// Resource timing analysis
export const analyzeResourceTiming = () => {
  const resources = performance.getEntriesByType("resource");
  return resources.map((resource) => ({
    name: resource.name.split("/").pop(),
    type: resource.initiatorType,
    duration: `${resource.duration.toFixed(2)}ms`,
    size: resource.transferSize
      ? `${(resource.transferSize / 1024).toFixed(2)}KB`
      : "unknown",
  }));
};

// Navigation timing
export const getNavigationTiming = () => {
  const timing = performance.getEntriesByType("navigation")[0];
  if (timing) {
    return {
      dnsLookup: `${(timing.domainLookupEnd - timing.domainLookupStart).toFixed(
        2
      )}ms`,
      tcpConnection: `${(timing.connectEnd - timing.connectStart).toFixed(
        2
      )}ms`,
      serverResponse: `${(timing.responseEnd - timing.requestStart).toFixed(
        2
      )}ms`,
      domLoad: `${(
        timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart
      ).toFixed(2)}ms`,
      fullPageLoad: `${(timing.loadEventEnd - timing.loadEventStart).toFixed(
        2
      )}ms`,
    };
  }
  return null;
};
