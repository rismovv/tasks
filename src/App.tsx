import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    // Bootstrap CDN for demo purposes
    React.useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    const logHelloWorld = () => {
        // eslint-disable-next-line no-console
        console.log("Hello World!");
    };

    return (
        <div className="App">
            {/* Header 1 */}
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <h2>Welcome to the Hello World Demo</h2>
            </header>
            {/* Image with alt text */}
            <img
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="React Logo"
                style={{ width: 100, margin: 16 }}
            />
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <button
                type="button"
                className="btn btn-primary"
                onClick={logHelloWorld}
            >
                Log Hello World
            </button>
            {/* Red background element for CSS check */}
            <div className="red-bg" style={{ marginTop: 20, padding: 10 }}>
                This element has a red background.
            </div>
        </div>
    );
}

export default App;
