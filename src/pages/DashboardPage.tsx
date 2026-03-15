import type { CartItem, User } from "../App";
import { courses } from "../data/courses";
import { Link, useNavigate } from "react-router-dom";

type DashboardPageProps = {
  user: User | null;
  addToCart: (item: CartItem) => void;
};

export const DashboardPage = ({ user, addToCart }: DashboardPageProps) => {
  const firstName = user?.name?.split(" ")[0] ?? "Learner";
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Welcome back
        </p>
        <h1 className="text-xl font-semibold text-slate-100">
          Hey, {firstName}. Let&apos;s keep building.
        </h1>
        <p className="text-xs text-slate-400">
          Pick up a track below or jump straight into your cart.
        </p>
      </header>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            Recommended for you
          </h2>
          <Link
            to="/cart"
            className="text-[11px] font-medium text-slate-400 hover:text-slate-200"
          >
            View cart →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group glass-panel flex flex-col overflow-hidden border-slate-800/80 p-4"
            >
              <Link
                to={`/courses/${course.id}`}
                className="relative mb-4 block h-28 overflow-hidden rounded-2xl border border-slate-800/80"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80`}
                />
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="relative h-full w-full object-cover mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              <div className="flex flex-1 flex-col gap-2 text-xs">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {course.category}
                </p>
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-100">
                  {course.title}
                </h3>
                <p className="line-clamp-2 text-[11px] text-slate-400">
                  {course.accent}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-[11px] text-slate-400">
                    {course.duration} · {course.level}
                  </span>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-100">
                      ₹{course.price.toFixed(0)}
                    </div>
                    <button
                      className="mt-2 rounded-full bg-slate-100/5 px-3 py-1 text-[11px] font-semibold text-slate-100 hover:bg-slate-100/10"
                      onClick={() => {
                        addToCart({
                          id: course.id,
                          title: course.title,
                          thumbnail: course.thumbnail,
                          instructor: course.instructor,
                          price: course.price,
                          level: course.level
                        });
                        navigate("/cart");
                      }}
                    >
                      Add to cart & view cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

