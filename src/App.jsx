import React from "react";

import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const ProductPage = React.lazy(() => import("./pages/ProductPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>...Loading</div>}>
        <ProductPage />
      </React.Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
