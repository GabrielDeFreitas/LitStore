import { BrowserRouter, Route, Routes } from 'react-router'
import { RoutesUrls } from './utils/enums/routes-url'
import Home from './pages/home'
import Test from './pages/test'
import Error from './pages/error-generic'
import Cart from './pages/cart'

export default function RouterProvider() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <Home />
    },
    {
      path: RoutesUrls.BASE_URL_TEST,
      element: <Test />
    },
    {
      path: RoutesUrls.BASE_URL_CART,
      element: <Cart />
    },
    {
      path: RoutesUrls.ERROR_GENERIC,
      element: <Error />
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
