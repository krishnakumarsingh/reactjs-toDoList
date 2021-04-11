import React from "react";

function ErrorBoundariesChild({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!!");
  }
  return (
    <>
      <div>
        <b>Hero Name:</b> {heroName}
      </div>
    </>
  );
}

export default ErrorBoundariesChild;
