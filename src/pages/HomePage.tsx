import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import type { CartItem } from "../App";

type HomePageProps = {
  addToCart: (item: CartItem) => void;
};

export const HomePage = ({ addToCart }: HomePageProps) => {
  const heroPrimary = courses[0];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.7fr,1.1fr] items-stretch">
        <div className="glass-panel relative overflow-hidden p-8">
          <div className="pointer-events-none absolute -left-32 top-6 h-64 w-64 rounded-full bg-primary-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-16 h-64 w-64 rounded-full bg-accent-500/40 blur-3xl" />

          <div className="relative flex flex-col gap-6">
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 shadow-glow-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Live, on-demand, and cohort-based learning</span>
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-primary-200 via-white to-accent-200 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                Learn in color.
                <br />
                <span className="text-slate-300">
                  Build the career you actually want.
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-300">
                Lumina LMS curates the sharpest instructors and wraps them in an
                ultra-premium, cinematic learning experience. Fewer boring
                slides, more flow-state moments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/courses" className="btn-primary">
                Browse signature courses
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center text-xs font-semibold text-slate-200 hover:text-white"
              >
                Already learning?{" "}
                <span className="ml-1 underline decoration-primary-500 decoration-2 underline-offset-4">
                  Continue your journey
                </span>
              </Link>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-4 text-xs text-slate-300">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Active learners
                </dt>
                <dd className="text-sm font-semibold text-slate-100">
                  32,000+
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Average rating
                </dt>
                <dd className="text-sm font-semibold text-amber-300">4.8/5.0</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Countries
                </dt>
                <dd className="text-sm font-semibold text-slate-100">70+</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="glass-panel flex flex-col justify-between overflow-hidden p-5">
          <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
            <span className="chip border-none bg-slate-900/80 text-[10px] uppercase tracking-[0.16em] text-slate-300">
              Spotlit course
            </span>
            <span>New drops every Monday</span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/80 shadow-xl">
            <div
              className={`absolute inset-0 opacity-70 bg-gradient-to-br ${heroPrimary.gradient}`}
            />
            <div className="relative p-5">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-100">
                {heroPrimary.category}
              </p>
              <h2 className="text-lg font-semibold text-slate-50">
                {heroPrimary.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-xs text-slate-100/90">
                {heroPrimary.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-slate-100/90">
                <span className="chip border-none bg-slate-950/40 text-[11px] text-slate-100">
                  {heroPrimary.level}
                </span>
                <span className="chip border-none bg-slate-950/40 text-[11px] text-slate-100">
                  {heroPrimary.duration} runtime
                </span>
                <span className="chip border-none bg-slate-950/40 text-[11px] text-slate-100">
                  {heroPrimary.students.toLocaleString()} learners
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-white">
                    ₹{heroPrimary.price.toFixed(0)}
                  </span>
                  <span className="text-[11px] text-slate-200">one-time</span>
                </div>
                <button
                  className="btn-primary px-4 py-1.5 text-xs"
                  onClick={() =>
                    addToCart({
                      id: heroPrimary.id,
                      title: heroPrimary.title,
                      thumbnail: heroPrimary.thumbnail,
                      instructor: heroPrimary.instructor,
                      price: heroPrimary.price,
                      level: heroPrimary.level
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex -space-x-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-900 bg-sky-400 text-[11px] font-semibold text-slate-950">
                A
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-900 bg-fuchsia-400 text-[11px] font-semibold text-slate-950">
                M
              </span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-900 bg-emerald-400 text-[11px] font-semibold text-slate-950">
                K
              </span>
            </div>
            <p>“The platform feels like a designer built it.”</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            Signature tracks
          </h2>
          <Link
            to="/courses"
            className="text-[11px] font-medium text-slate-400 hover:text-slate-200"
          >
            View all courses →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group glass-panel flex flex-col overflow-hidden border-slate-800/80 p-4"
            >
              <div className="relative mb-4 h-32 overflow-hidden rounded-2xl border border-slate-800/80">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80`}
                />
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="relative h-full w-full object-cover mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {course.category}
                </p>
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-100">
                  {course.title}
                </h3>
                <p className="line-clamp-2 text-xs text-slate-400">
                  {course.accent}
                </p>
                <div className="mt-auto flex items-center justify-between pt-3 text-[11px] text-slate-400">
                  <span>
                    {course.duration} · {course.level}
                  </span>
                  <span className="font-semibold text-slate-100">
                    ₹{course.price.toFixed(0)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

