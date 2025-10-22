import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      marginTop: '4rem',
      padding: '2rem',
      background: '#262829',
      color: '#fff',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        News Portal
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: "0.99rem", color: "#CCC" }}>
        &copy; 2025 News Portal 
      </div>
      <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '1.1rem' }}>
        <span>
          <a href="https://github.com/satishkumar-yadav/news-portal-next-js" target="_blank" rel="noopener noreferrer" style={{ color: "#60A5FA", textDecoration: "none" }}>
            GitHubRepo
          </a>
        </span>
        <span>
          <a href="https://news-portal-next-js-bice.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#60A5FA", textDecoration: "none" }}>
            Vercel
          </a>
        </span>
        <span>
          <a href="mailto:satishkumar.yadav.7549@gmail.com" style={{ color: "#60A5FA", textDecoration: "none" }}>
            Email
          </a>
        </span>
      </div>
      <div style={{ marginBottom: '0.6rem', fontSize: "0.97rem", color: "#BBB" }}>
        Quick Links: <Link href="/" style={{ color: "#FFD700", textDecoration: "none" }}>Home</Link> |{' '}
        <Link href="/favorites" style={{ color: "#FFD700", textDecoration: "none" }}>Fav News</Link> |{' '}
        <Link href="/" style={{ color: "#FFD700", textDecoration: "none" }}>Latest News</Link>
      </div>
    </footer>
  );
}
