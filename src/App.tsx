import { BrowserRouter, Routes, Route, Link, useRouteError, Outlet } from 'react-router-dom';
import { Header } from './components/site/Header';
import { Footer } from './components/site/Footer';
import { CartProvider } from './components/cart/CartContext';
import { CartDrawer } from './components/cart/CartDrawer';
import { FloatingWhatsApp } from './components/site/FloatingWhatsApp';

import Index from './routes/index';
import About from './routes/about';
import Contact from './routes/contact';
import Donate from './routes/donate';
import Events from './routes/events';
import Gallery from './routes/gallery';
import Impact from './routes/impact';
import Shop from './routes/shop';
import Volunteer from './routes/volunteer';
import Checkout from './routes/checkout';

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-warm">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off. Let's get you home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartDrawer />
      <FloatingWhatsApp />
    </CartProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} errorElement={<ErrorComponent />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="impact" element={<Impact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}