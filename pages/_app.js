// importing css
import "../styles.css"

// _app.js is rendering everything

const App = ({Component, pageProps}) => {
    return (
        <Component {...pageProps} />
    )
}

export default App