
const Error = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <img src="./images/error.svg" alt="" height={400}/>
        <p style={{
            color: '#4450E4',
            fontSize: 20
        }}>404 || The Page you are looking not found</p>
    </div>
  )
}

export default Error