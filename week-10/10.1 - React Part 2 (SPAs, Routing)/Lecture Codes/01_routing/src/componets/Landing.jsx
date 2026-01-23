import React from "react";

const Landing = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>MyApp</h2>
        <div>
          <a href="#features" style={styles.link}>
            Features
          </a>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to MyApp</h1>
        <p style={styles.subtitle}>
          Build fast, modern, and scalable web applications with ease.
        </p>
        <button style={styles.button}>Get Started</button>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.card}>
          <h3> Fast</h3>
          <p>Optimized for performance and speed.</p>
        </div>
        <div style={styles.card}>
          <h3> Secure</h3>
          <p>Built with security best practices.</p>
        </div>
        <div style={styles.card}>
          <h3> Flexible</h3>
          <p>Easy to customize and scale.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    background: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  link: {
    color: "#fff",
    marginLeft: "20px",
    textDecoration: "none",
  },
  hero: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    background: "#fff",
    color: "#333",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "60px 20px",
  },
  card: {
    padding: "20px",
    maxWidth: "250px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#f5f5f5",
  },
};

export default Landing;
