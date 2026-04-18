export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle form submission
    if (request.method === "POST" && url.pathname === "/submit") {
      const data = await request.formData();
      
      // You can save data here later using env.MY_KV
      console.log("Form received:", Object.fromEntries(data));

      return new Response(`
        <h1>Thank you! ✅</h1>
        <p>Your message has been received.</p>
        <a href="/">← Back to Home</a>
      `, {
        headers: { "Content-Type": "text/html" }
      });
    }

    // Show a simple page
    return new Response(`
      <h1>Hello from Cloudflare Worker! 👋</h1>
      <p>This is your backend.</p>
    `, {
      headers: { "Content-Type": "text/html" }
    });
  }
}