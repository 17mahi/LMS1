import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../App";

type AuthPageProps = {
  onAuth: (user: User) => void;
};

export const AuthPage = ({ onAuth }: AuthPageProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth({ name: name || "Lumina Learner", email });
    navigate("/dashboard");
  };

  return (
    <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] items-center">
      <section className="space-y-6">
        <div className="glass-panel relative overflow-hidden p-8">
          <div className="pointer-events-none absolute -left-24 top-6 h-56 w-56 rounded-full bg-primary-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-16 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl" />

          <div className="relative space-y-4">
            <h1 className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl">
              Log back in, or take the leap.
            </h1>
            <p className="max-w-md text-xs text-slate-300">
              Your progress, streaks, and certificates are synced in the cloud.
              Use a simple demo account here—no real passwords or emails are
              sent anywhere.
            </p>

            <ul className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
              <li className="rounded-2xl bg-slate-900/80 p-3">
                <p className="text-[11px] font-semibold text-slate-100">
                  One profile for everything
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Courses, notes, and certificates tied to a single identity.
                </p>
              </li>
              <li className="rounded-2xl bg-slate-900/80 p-3">
                <p className="text-[11px] font-semibold text-slate-100">
                  Progress that sticks
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Resume anywhere, with lesson-level checkpoints.
                </p>
              </li>
              <li className="rounded-2xl bg-slate-900/80 p-3">
                <p className="text-[11px] font-semibold text-slate-100">
                  Built for focus
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Dark, colorful UI tuned to feel cinematic—not corporate.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="glass-panel p-6">
        <div className="mb-4 flex gap-2 rounded-full bg-slate-900/80 p-1 text-xs">
          <button
            type="button"
            className={`flex-1 rounded-full px-3 py-2 font-semibold ${
              mode === "login"
                ? "bg-slate-100 text-slate-950"
                : "text-slate-300"
            }`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={`flex-1 rounded-full px-3 py-2 font-semibold ${
              mode === "signup"
                ? "bg-slate-100 text-slate-950"
                : "text-slate-300"
            }`}
            onClick={() => setMode("signup")}
          >
            Sign up
          </button>
        </div>

        <form className="space-y-4 text-xs" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-200">
                Full name
              </label>
              <input
                className="w-full rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
                placeholder="Aarav Kapoor"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-200">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
              placeholder="you@lumina.email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-medium text-slate-200">
              Password (demo only)
            </label>
            <input
              type="password"
              required
              className="w-full rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-[10px] text-slate-500">
              This is a front-end only demo. Your credentials are never sent to
              a real server.
            </p>
          </div>

          <button className="btn-primary mt-2 w-full justify-center py-2 text-xs">
            {mode === "login" ? "Login to Lumina" : "Create Lumina account"}
          </button>
        </form>
      </section>
    </div>
  );
};

