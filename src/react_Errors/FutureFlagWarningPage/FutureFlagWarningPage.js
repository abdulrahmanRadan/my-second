import React from "react";
import { useNavigate } from "react-router-dom";
import "./FutureFlagWarningPage.css";

const FutureFlagWarningPage = () => {
  const naviate = useNavigate();
  return (
    <div className="warning-container">
      <button onClick={() => naviate(-1)}>Go Back</button>
      <h1>Warning: React Router Future Flag Warning</h1>

      <div className="solution-section">
        <h2>Reason:</h2>
        <p>
          This warning occurs because React Router v6.15 and newer versions
          introduce "future flags" to prepare for changes in v7. These flags
          allow developers to opt-in to new behaviors or features that will be
          the default in the next major version (v7).
        </p>

        <h2>Solution:</h2>
        <p>
          To fix or silence this warning, you can add the future flags directly
          inside the <code>&lt;BrowserRouter&gt;</code> component. Here is an
          example:
        </p>

        <pre>
          <code>
            {`
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`}
          </code>
        </pre>

        <h2>Explanation:</h2>
        <ul>
          <li>
            <code>v7_startTransition</code>: Opt-in to using{" "}
            <code>React.startTransition</code> for state updates, allowing React
            to prioritize updates in future versions.
          </li>
          <li>
            <code>v7_relativeSplatPath</code>: Changes how relative routes are
            resolved within "splat" routes (routes with wildcard `*`).
          </li>
        </ul>

        <h2>Additional Info:</h2>
        <p>
          These future flags help developers prepare for upcoming changes in
          React Router v7 without introducing breaking changes immediately. You
          can read more about these changes in the official documentation:
          <a
            href="https://reactrouter.com/en/main/upgrading/v7"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router v7 Upgrading Guide
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FutureFlagWarningPage;
