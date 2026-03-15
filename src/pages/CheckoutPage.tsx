import type { CartItem, User } from "../App";

type CheckoutPageProps = {
  items: CartItem[];
  clearCart: () => void;
  user: User | null;
};

export const CheckoutPage = ({ items, clearCart, user }: CheckoutPageProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  const handleFakePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "This is a demo payment screen only.\n\nIn a real app, this is where you would be redirected to a secure payment provider like Razorpay, Stripe, or PayPal."
    );
    clearCart();
  };

  return (
    <div className="grid gap-8 md:grid-cols-[1.6fr,1.1fr]">
      <section className="glass-panel p-6 text-xs">
        <h1 className="text-lg font-semibold text-slate-100">
          Payment details (demo only)
        </h1>
        <p className="mt-1 text-[11px] text-slate-400">
          This is a front-end only simulation. Use any data you like—no real
          transactions happen here.
        </p>

        <form onSubmit={handleFakePayment} className="mt-5 space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-200">
              Name on card
            </label>
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
              defaultValue={user?.name ?? ""}
              placeholder="Aarav Kapoor"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-200">
              Card number
            </label>
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
              placeholder="4242 4242 4242 4242"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-200">
                Expiry
              </label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
                placeholder="12/28"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-200">
                CVV
              </label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
                placeholder="123"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-200">
                Country
              </label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
                placeholder="India"
              />
            </div>
          </div>

          <button className="btn-primary mt-2 w-full justify-center py-2 text-xs">
            Pay securely (simulation)
          </button>
        </form>
      </section>

      <aside className="space-y-4">
        <div className="glass-panel space-y-4 p-5 text-xs">
          <h2 className="text-sm font-semibold text-slate-100">
            Order summary
          </h2>
          <ul className="space-y-2 text-[11px] text-slate-300">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-slate-900/80 px-3 py-2"
              >
                <div className="flex-1">
                  <p className="line-clamp-1 text-slate-100">{item.title}</p>
                  <p className="text-[10px] text-slate-400">{item.instructor}</p>
                </div>
                <span className="ml-3 text-xs font-semibold text-slate-100">
                  ₹{item.price.toFixed(0)}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-slate-800/80 pt-3 text-[11px] text-slate-300">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(0)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Platform fee</span>
              <span>₹0</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs font-semibold text-slate-100">
              <span>Total</span>
              <span>₹{subtotal.toFixed(0)}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

