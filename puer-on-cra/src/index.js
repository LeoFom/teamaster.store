import React from 'react'
import ReactDOM, { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Main from './pages/Main.jsx';
import Catalog from "./pages/Catalog.jsx";
import Articles from "./pages/Articles.jsx"
import ArticlesAbout from "./pages/ArticlesAbout.jsx";
import App from './App'
import ErrorPage from './ErrorPage';
import CatalogElements from './components/CatalogElements';
import { HelmetProvider } from 'react-helmet-async';
import AboutProduct from './pages/AboutProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        element: <Main/>,
        index: true,
        errorElement: <ErrorPage/>,

      },
      {
        path: "catalog",
        element: <Catalog/>,
        children: [
          {
            path: "/catalog/tea",
            element: <CatalogElements/>,
          },
          {
            path: "/catalog/dishes",
            element: <CatalogElements/>,
          }, 
        ]
      },
      {
        path: "catalog/tea/:teaId",
        element : <AboutProduct/>,
      },
      {
        path: "catalog/dishes/:dishesId",
        element : <AboutProduct/>,
      },
      {
        path: 'articles/',
        element: <Articles></Articles>,       
      },
      {
        path: 'articles/:articlesId',
        element: <ArticlesAbout></ArticlesAbout>,    
      }
    ]
  },
  
], 
{basename: "/"}
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <Main/>,
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//     children: [
//     {
//       path: index,
//       element: <Main/>,
//     },
//     {
//       path: "catalog/",
//       element: <Catalog/>,
//       children: [
//         {
//           path: "catalog/tea",
//           element: <CatalogElements/>,
//         },
//         {
//           path: "catalog/dishes",
//           element: <CatalogElements/>,
//         }, 
//       ]
//     },
//     {
//       path: "catalog/tea/:teaId",
//       element : <AboutProduct/>,
//     },
//     {
//       path: "catalog/dishes/:dishesId",
//       element : <AboutProduct/>,
//     },
//     {
//       path: 'articles/',
//       element: <Articles></Articles>,       
//     },
//     {
//       path: 'articles/:articlesId',
//       element: <ArticlesAbout></ArticlesAbout>,    
//     }
//   ]
//   },
// ], 
// {basename: "/"}
// );

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
  <HelmetProvider>
    <RouterProvider  router={router}/>
  </HelmetProvider>
  </React.StrictMode>
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.
// hydrateRoot(
  
//     document.getElementById('root'),
//   <React.StrictMode>
//     <HelmetProvider>
//       <RouterProvider  router={router}/>
//     </HelmetProvider>
//   </React.StrictMode>,

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
