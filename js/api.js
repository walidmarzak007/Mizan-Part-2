const API_BASE_URL = "http://localhost:3000";

export async function request(path, options = {}) {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 8000);

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    const finalHeaders = {
        ...headers,
        ...options.headers
    };

    try {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            ...options,
            headers: finalHeaders,
            signal: controller.signal
        });

        if (!response.ok) {
            throw {
                type: "http",
                status: response.status,
                message: `HTTP error: ${response.status}`
            };
        }

        const data = await response.json();

        return data;

        } catch (error) {
        if (error.name === "AbortError") {
            throw {
                type: "timeout",
                status: null,
                message: "Request timed out after 8 seconds"
            };
        }

        if (error.type === "http") {
            throw error;
        }

        if (error instanceof SyntaxError) {
            throw {
                type: "parse",
                status: null,
                message: "Failed to parse server response"
            };
        }

        if (!navigator.onLine) {
            throw {
                type: "offline",
                status: null,
                message: "No internet connection"
            };
        }

        throw {
            type: "network",
            status: null,
            message: "Network request failed"
        };
        } finally {
        clearTimeout(timeoutId);
    }
}