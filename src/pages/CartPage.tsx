import { Link, useNavigate } from "react-router-dom";
import type { CartItem } from "../App";

type CartPageProps = {
  items: CartItem[];
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const CartPage = ({ items, removeFromCart, clearCart }: CartPageProps) => {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="glass-panel flex flex-col items-center justify-center gap-4 p-8 text-center text-sm text-slate-200">
        <p>Your cart is currently empty.</p>
        <Link to="/courses" className="btn-primary">
          Explore courses
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-[2fr,1.1fr]">
      <section className="space-y-4">
        <h1 className="text-xl font-semibold text-slate-100">Your cart</h1>
        <div className="space-y-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="glass-panel flex items-center gap-4 border-slate-800/80 p-4 text-xs"
            >
              <div className="relative h-16 w-24 overflow-hidden rounded-xl border border-slate-800/80">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="line-clamp-2 text-sm font-semibold text-slate-100">
                  {item.title}
                </h2>
                <p className="text-[11px] text-slate-400">
                  {item.instructor} · {item.level}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 text-xs">
                <span className="text-sm font-semibold text-slate-100">
                  ₹{item.price.toFixed(0)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[11px] text-slate-400 hover:text-rose-300"
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="space-y-4">
        <div className="glass-panel space-y-4 p-5 text-xs">
          <h2 className="text-sm font-semibold text-slate-100">
            Order summary
          </h2>
          <div className="space-y-2 text-slate-300">
            <div className="flex items-center justify-between text-[11px]">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(0)}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span>Platform fee</span>
              <span>₹0</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-100">
              <span>Total</span>
              <span>₹{subtotal.toFixed(0)}</span>
            </div>
          </div>

          <button
            className="btn-primary w-full justify-center py-2 text-xs"
            onClick={() => navigate("/checkout")}
          >
            Continue to payment
          </button>
          <button
            className="w-full rounded-full border border-slate-700 bg-slate-900/70 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-900"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>
      </aside>
    </div>
  );
};

