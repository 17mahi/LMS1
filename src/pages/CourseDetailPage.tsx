import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import type { CartItem } from "../App";

type CourseDetailPageProps = {
  addToCart: (item: CartItem) => void;
};

export const CourseDetailPage = ({ addToCart }: CourseDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="glass-panel p-6 text-sm text-slate-200">
        Course not found.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-[2fr,1.1fr]">
      <section className="space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="text-[11px] text-slate-400 hover:text-slate-200"
        >
          ← Back to courses
        </button>

        <div className="glass-panel overflow-hidden border-slate-800/80">
          <div className="relative h-56 overflow-hidden border-b border-slate-800/80">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80`}
            />
            <img
              src={course.thumbnail}
              alt={course.title}
              className="relative h-full w-full object-cover mix-blend-luminosity"
              loading="lazy"
            />
          </div>
          <div className="space-y-4 p-6 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {course.category}
                </p>
                <h1 className="mt-1 text-lg font-semibold text-slate-100">
                  {course.title}
                </h1>
              </div>
              <div className="flex flex-col items-end text-[11px] text-slate-400">
                <span>
                  ⭐ {course.rating.toFixed(1)} ·{" "}
                  {course.students.toLocaleString()} learners
                </span>
                <span className="mt-1 text-slate-300">
                  by{" "}
                  <span className="font-semibold text-slate-100">
                    {course.instructor}
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-300">{course.description}</p>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="chip">{course.level}</span>
              <span className="chip">{course.duration} runtime</span>
              <span className="chip">
                {course.students.toLocaleString()} active learners
              </span>
            </div>

            <div className="pt-3">
              <h2 className="text-xs font-semibold text-slate-200">
                You will build
              </h2>
              <ul className="mt-2 grid gap-2 text-[11px] text-slate-300 sm:grid-cols-2">
                {course.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-slate-900/80 p-2"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <div className="glass-panel space-y-4 p-5 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-slate-50">
                ₹{course.price.toFixed(0)}
              </span>
              <span className="text-[11px] text-slate-400">
                Lifetime access · Certificate of completion
              </span>
            </div>
          </div>

          <button
            className="btn-primary w-full justify-center py-2 text-xs"
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
            Add to cart & go to cart
          </button>

          <button
            className="mt-1 w-full rounded-full border border-slate-700 bg-slate-900/70 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-900"
            onClick={() => {
              addToCart({
                id: course.id,
                title: course.title,
                thumbnail: course.thumbnail,
                instructor: course.instructor,
                price: course.price,
                level: course.level
              });
              navigate("/checkout");
            }}
          >
            Buy now
          </button>
        </div>
      </aside>
    </div>
  );
};

