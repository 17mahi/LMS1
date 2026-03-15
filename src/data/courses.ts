export type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  thumbnail: string;
  gradient: string;
  instructor: string;
  accent: string;
  description: string;
  highlights: string[];
};

export const courses: Course[] = [
  {
    id: "neo-react-masterclass",
    title: "React 18 Neo Masterclass",
    category: "Frontend",
    level: "Intermediate",
    duration: "18h",
    students: 12340,
    rating: 4.8,
    price: 49.0,
    thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    gradient: "from-primary-500 via-sky-500 to-indigo-500",
    instructor: "Ava Sterling",
    accent: "React · Hooks · Performance",
    description:
      "Build ultra-modern, production-grade React applications with a focus on performance, DX, and animations. From design systems to advanced patterns.",
    highlights: [
      "Design system driven development",
      "Advanced hooks and state machines",
      "Real-world performance tuning"
    ]
  },
  {
    id: "fullstack-sculpt",
    title: "Full-Stack Sculpt: TypeScript to Cloud",
    category: "Full Stack",
    level: "Advanced",
    duration: "26h",
    students: 8270,
    rating: 4.9,
    price: 69.0,
    thumbnail: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    gradient: "from-emerald-500 via-teal-400 to-cyan-500",
    instructor: "Noah Kade",
    accent: "TypeScript · APIs · Cloud",
    description:
      "Craft a polished SaaS platform end-to-end using React, TypeScript, Node, and serverless functions. Includes deployment and observability.",
    highlights: [
      "API design and versioning",
      "Secure authentication flows",
      "Cloud-native deployment playbook"
    ]
  },
  {
    id: "design-chroma",
    title: "Chroma UX: Interface Design in Color",
    category: "Design",
    level: "Beginner",
    duration: "9h",
    students: 4320,
    rating: 4.7,
    price: 35.0,
    thumbnail: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    gradient: "from-rose-500 via-fuchsia-500 to-amber-400",
    instructor: "Sofia Mirage",
    accent: "Figma · UX · Design Systems",
    description:
      "Learn to compose vibrant, accessible interfaces that feel high-end. From color theory to motion and micro-interactions.",
    highlights: [
      "Practical color systems",
      "Accessible typography",
      "Micro-interaction libraries"
    ]
  }
];

