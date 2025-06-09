import { useState, useEffect } from "react";
import {
  usePerformanceMonitor,
  getMemoryUsage,
  analyzeResourceTiming,
  getNavigationTiming,
} from "../Utils/performance";

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState(null);
  const { logMetrics } = usePerformanceMonitor();

  useEffect(() => {
    const gatherMetrics = async () => {
      // Only show in development
      if (process.env.NODE_ENV === "development") {
        const navigationTiming = getNavigationTiming();
        const resourceTiming = analyzeResourceTiming();
        const memory = getMemoryUsage();

        setMetrics({
          navigation: navigationTiming,
          resources: resourceTiming,
          memory,
        });

        // Log metrics to console
        logMetrics();
      }
    };

    gatherMetrics();
  }, []);

  if (!metrics || process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm max-w-sm z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>

      {metrics.navigation && (
        <div className="mb-2">
          <p className="font-semibold">Navigation Timing:</p>
          <ul className="ml-2">
            <li>DNS Lookup: {metrics.navigation.dnsLookup}</li>
            <li>Server Response: {metrics.navigation.serverResponse}</li>
            <li>Page Load: {metrics.navigation.fullPageLoad}</li>
          </ul>
        </div>
      )}

      {metrics.memory && (
        <div className="mb-2">
          <p className="font-semibold">Memory Usage:</p>
          <ul className="ml-2">
            <li>Used: {metrics.memory.used}</li>
            <li>Total: {metrics.memory.total}</li>
            <li>Usage: {metrics.memory.percentage}</li>
          </ul>
        </div>
      )}

      <div>
        <p className="font-semibold">
          Slow Resources (
          {
            metrics.resources.filter((r) => parseFloat(r.duration) > 1000)
              .length
          }
          ):
        </p>
        <ul className="ml-2">
          {metrics.resources
            .filter((r) => parseFloat(r.duration) > 1000)
            .map((resource, index) => (
              <li key={index}>
                {resource.name} - {resource.duration}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
