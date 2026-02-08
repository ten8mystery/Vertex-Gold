/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */

// Point directly to the root where the file should be moved
const stockSW = "/uv.sw.js"; // Note the leading slash!
/**
 * List of hostnames allowed to run serviceworkers on http
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global registration utility
 */
async function registerSW() {
    if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
    )
        throw new Error("Service workers cannot be registered without https.");

    if (!navigator.serviceWorker)
        throw new Error("Your browser doesn't support service workers.");

    // Registering from the root fixes the "Max Scope Allowed" security error
    await navigator.serviceWorker.register(stockSW, {
        scope: __uv$config.prefix,
    });
}
