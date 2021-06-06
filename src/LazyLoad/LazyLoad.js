import React, { Suspense, lazy } from "react";
const LazyComp = lazy(() => import("./LazyComp"));

function LazyLoad() {
  return (
    <div>
      Just wait lazy is coming...
      <Suspense fallback={<h5>Waiting...</h5>}>
        <LazyComp />
      </Suspense>
    </div>
  );
}

export default LazyLoad;
