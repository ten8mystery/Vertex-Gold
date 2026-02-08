"use strict";

/**
 * Distributed with Ultraviolet - Optimized for Cloudflare Pages
 */

const stockSW = "/uv-sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1", "0.0.0.0"];

async function registerSW() {
    // 1. Check for HTTPS
    if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
    ) {
        throw new Error("Service workers cannot be registered without https.");
    }

    // 2. Register the Worker
    if ("serviceWorker" in navigator) {
        try {
            // We add the timestamp (?v=) to bypass Cloudflare's aggressive caching
            const registration = await navigator.serviceWorker.register(stockSW + '?v=' + Date.now(), {
                scope: __uv$config.prefix,
            });
            
            console.log("Vertex: SW Active at scope:", registration.scope);
        } catch (err) {
            console.error("Vertex: SW Registration failed:", err);
        }
    }
}
