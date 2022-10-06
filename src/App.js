import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import './App.scss';
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Home from "./pages/home/home";
import Details, {loader as detailsLoader} from "./pages/details/details";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <h3>No page found</h3>
        },
        {
            path: "id/:jokeId",
            element: <Details />,
            loader: detailsLoader
        },
    ]);

  return (
    <div className="content-body">
      <Header />
      <div className={'content'}>
          {
              <RouterProvider router={router} />
          }
      </div>
      <Footer />
    </div>
  );
}

export default App;
