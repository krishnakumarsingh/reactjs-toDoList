import React from "react";
import HeaderText from "../components/HeaderText";
import ErrorBoundariesChild from "./ErrorBoundariesChild";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorBoundaries() {
  return (
    <div>
      <HeaderText text="ErrorBoundaries" />
      <p>
        <b>
          In the past, JavaScript errors inside components used to corrupt
          React’s internal state and cause it to emit cryptic errors on next
          renders. These errors were always caused by an earlier error in the
          application code, but React did not provide a way to handle them
          gracefully in components, and could not recover from them.
        </b>
      </p>
      <p>
        A class components that implements either one or both of the lifecycle
        methords{" "}
        <i>
          <b>getDrivedStateFromError</b>
        </i>{" "}
        or{" "}
        <i>
          <b>componentDidCatch</b>
        </i>
        becomes an{" "}
        <i>
          <b>error boundary</b>
        </i>
        .
      </p>
      <br />
      <p>
        The static methord <i>getDrivedStateFromError</i> methord is used to
        render a fallback UI after an error is thrown and the{" "}
        <i>componentDidCatch</i> methord is used to log the error information.
      </p>
      <ErrorBoundary>
        <ErrorBoundariesChild heroName="SuperMen" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorBoundariesChild heroName="BatMen" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorBoundariesChild heroName="Joker" />
      </ErrorBoundary>
      <hr />
    </div>
  );
}
