import { useRoutes } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import RejectedRoute from './components/RejectedRoute'
import Profile from '~/pages/Profile/Profile'
import ConfirmOTP from '~/pages/ConfirmOTP'
import NotFound from '~/pages/NotFound/NotFound'
import Market from '~/pages/Market'
import ProductView1 from '~/pages/Product-View1'
import ProductView2 from '~/pages/Product-View2'


function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        },
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        },
        {
          path: '/market',
          element: (
            <MainLayout>
              <Market />
            </MainLayout>
          )
        },
        {
          path: '/product-view-1',
          element: (
            <MainLayout>
              <ProductView1 />
            </MainLayout>
          )
        },
        {
          path: '/product-view-2',
          element: (
            <MainLayout>
              <ProductView2 />
            </MainLayout>
          )
        },

      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    },
    {
      path: '/confirm_otp/:email',
      element: <ConfirmOTP />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}

export default useRouteElements
