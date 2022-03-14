import './App.css';
import './index.css'

function App() {
    return (
        <>
            <header>
                <div id="navbar-logo">
                    <a href="index.js">EQRIES</a>
                </div>
                <nav>
                    <ul>
                        {/*todo create pages and link to href*/}
                        <li><a href="index.js">Registreer / Login</a></li>
                        <li><a href="index.js">Services</a></li>
                        <li><a href="index.js">Contactgegevens</a></li>
                        <li><a href="index.js">Geschiedenis</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section></section>
                <section></section>
            </main>
            <footer>
                <p>EQRIES Racing service/garage</p>
            </footer>
        </>
    );
}

export default App;
