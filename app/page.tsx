import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0" 
        />
        <meta
          name="description"
          content="Prostir - Shaping the Future of Workflows with AI and Automation"
        />
        <title>Prostir | Shaping the Future</title>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            background-color: #fff;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          header {
            background-color: #fff;
            color: #000;
            padding: 20px 10%;
            max-width: 800px;
            margin: 40px auto 0 auto;
            text-align: left;
          }
          header p {
            margin: 0;
            font-size: 1.2rem;
            line-height: 1.8;
          }
          header .brand {
            font-size: 2.5rem;
            font-weight: bold;
            letter-spacing: 1px;
          }
          main {
            padding: 20px 10%;
            max-width: 800px;
            margin: 0 auto;
          }
          section {
            margin: 40px 0;
            text-align: left;
          }
          section h2 {
            text-align: left;
            color: #000;
            margin-bottom: 20px;
          }
          section p {
            text-align: left;
          }
          footer {
            background-color: #fff;
            color: #000;
            text-align: left;
            padding: 10px 10%;
            margin-top: 40px;
            max-width: 800px;
            margin: 40px auto 0 auto;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .cta {
            display: inline-block;
            background-color: #000;
            color: #fff;
            padding: 10px 20px;
            margin-top: 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1rem;
          }
          .cta:hover {
            background-color: #333;
          }
          input[type="email"] {
            padding: 10px;
            width: 60%;
            max-width: 300px;
            border: 1px solid #000;
            border-radius: 5px;
          }
          button[type="submit"] {
            padding: 10px 20px;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button[type="submit"]:hover {
            background-color: #333;
          }
        `}</style>
      </Head>

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
