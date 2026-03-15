import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import type { CartItem } from "../App";

type CoursesPageProps = {
  addToCart: (item: CartItem) => void;
};

export const CoursesPage = ({ addToCart }: CoursesPageProps) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">
            Explore Lumina tracks
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Curated, project-first courses designed to feel like a premium
            studio production.
          </p>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="group glass-panel flex flex-col overflow-hidden border-slate-800/80 p-4"
          >
            <Link
              to={`/courses/${course.id}`}
              className="relative mb-4 block h-32 overflow-hidden rounded-2xl border border-slate-800/80"
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
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="uppercase tracking-[0.18em]">
                  {course.category}
                </span>
                <span>⭐ {course.rating.toFixed(1)}</span>
              </div>
              <h2 className="line-clamp-2 text-sm font-semibold text-slate-100">
                {course.title}
              </h2>
              <p className="line-clamp-2 text-[11px] text-slate-400">
                {course.description}
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                by <span className="font-semibold">{course.instructor}</span>
              </p>

              <div className="mt-auto flex items-center justify-between pt-3">
                <div className="flex flex-col text-[11px] text-slate-400">
                  <span>
                    {course.duration} · {course.level}
                  </span>
                  <span>
                    {course.students.toLocaleString()} learners enrolled
                  </span>
                </div>
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
    </div>
  );
};

