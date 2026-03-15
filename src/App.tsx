import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { AuthPage } from "./pages/AuthPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { DashboardPage } from "./pages/DashboardPage";

export type User = {
  name: string;
  email: string;
};

export type CartItem = {
  id: string;
  title: string;
  thumbnail: string;
  instructor: string;
  price: number;
  level: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleLogin = (payload: { name: string; email: string }) => {
    setUser({ name: payload.name, email: payload.email });
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (course: CartItem) => {
    setCart((prev) =>
      prev.find((c) => c.id === course.id) ? prev : [...prev, course]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <Navbar user={user} cartCount={cart.length} onLogout={handleLogout} />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                <DashboardPage user={user} addToCart={addToCart} />
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route path="/courses" element={<CoursesPage addToCart={addToCart} />} />
          <Route
            path="/courses/:id"
            element={<CourseDetailPage addToCart={addToCart} />}
          />
          <Route path="/auth" element={<AuthPage onAuth={handleLogin} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                items={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              cart.length === 0 ? (
                <Navigate to="/cart" replace />
              ) : (
                <CheckoutPage items={cart} clearCart={clearCart} user={user} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

