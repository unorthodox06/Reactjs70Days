function App() {
  return (
    <div>
      <nav>
        <ul style={{
          backgroundColor: 'red',
          margin: 0,
          padding: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none'
        }}>
          <li>
            <a href="#" style={{
              fontSize: 34,
              textDecoration: 'none',
              color: 'white'
            }}>Home</a></li>
          <li>
            <a href="#" style={{
              fontSize: 34,
              textDecoration: 'none',
              color: 'white'
            }}>Contact us</a></li>
          <li>
            <a href="#" style={{
              fontSize: 34,
              textDecoration: 'none',
              color: 'white'
            }}>About</a></li>
          <li>
            <a href="#" style={{
              fontSize: 34,
              textDecoration: 'none',
              color: 'white'
            }}>Login</a></li>

        </ul>

      </nav>

      <section style={{
        width: '75%',
        backgroundColor: '#f4f4f4',
        padding: 30,
        margin: 'auto 50px',
        textAlign: 'center'
      }}>
        <h1>This is section</h1>
      </section>

      <footer style={{
        backgroundColor: '#b7b7b7b7',
        textAlign: 'center',
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
        margin: '50px auto'
      }}>
        <h1>This is footer</h1>
      </footer>
    </div>
  )
}

export default App