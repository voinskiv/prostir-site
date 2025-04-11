export default function Home() {
  return (
    <>
      <header>
        <p className="brand">Prostir</p>
        <p>Shaping the Future of Workflows with AI and Automation</p>
      </header>

      <main>
        <section>
          <h2>Our Vision</h2>
          <p>
            Prostir explores innovative ways to simplify complexity, optimize efficiency, and unlock potential for businesses and individuals. We’re building a platform that leverages AI and automation to transform workflows and drive smarter decisions.
          </p>
        </section>

        <section>
          <h2>Prostir Begins with Expertise</h2>
          <p>
            Founded by Vitali Voinski, an AI & Automation Advisor, Prostir is driven by insights gained from real-world challenges. Every project shapes the future solutions we aim to offer, empowering businesses to thrive.
          </p>
          <p>
            <a 
              href="https://vitalivoinski.com" 
              style={{
                color: "#000",
                borderBottom: "2px solid #007BFF",
                paddingBottom: "2px",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Learn More About Vitali Voinski
            </a>
          </p>
        </section>

        <section>
          <h2>What’s Next for Prostir?</h2>
          <p>
            We’re developing tools, services, and frameworks to make AI-driven automation accessible to businesses of all sizes. Stay tuned as Prostir evolves to deliver scalable, impactful solutions.
          </p>
        </section>

        <section id="subscribe">
          <h2>Join the Journey</h2>
          <p>
            Subscribe to receive updates on our progress and insights into the future of AI-driven workflows.
          </p>
          <form action="/submit" method="POST">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Prostir. All rights reserved.</p>
      </footer>
    </>
  );
}
