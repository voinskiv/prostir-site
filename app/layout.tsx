import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Prostir - Shaping the Future of Workflows with AI and Automation" />
        <title>Prostir | Shaping the Future</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
