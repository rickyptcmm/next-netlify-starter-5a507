// pages/index.js
import Head from 'next/head'

export default function Resume() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Head>
        <title>Ricky Putra F. - HR Professional</title>
        <meta name="description" content="HR Professional with expertise in talent acquisition, compliance, and workforce management." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Ricky Putra F.</h1>
        <h2>HR Professional & Relationship Officer</h2>
        <p>
          <a href="mailto:Rickyputraf@gmail.com">Rickyputraf@gmail.com</a> • 
          <a href="https://linkedin.com/in/ricky-putra-febrianto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>

      <main>
        <section>
          <h3>About</h3>
          <p>Lulusan Psikologi dari Universitas Airlangga. Berpengalaman dalam talent acquisition, HR compliance, dan manajemen siklus karyawan.</p>
        </section>
      </main>
    </div>
  )
}
