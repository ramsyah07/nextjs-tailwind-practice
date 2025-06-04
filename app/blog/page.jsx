// File: app/blog/page.jsx
import BlogCard from "@/components/BlogCard";

const posts = [
  {
    slug: "introduction-to-react",
    title: "Introduction to React",
    excerpt: "Learn the basics of React.js and how to build user interfaces.",
    content: "React is a JavaScript library for building user interfaces...",
    date: "2025-06-01",
  },
  {
    slug: "nextjs-routing-guide",
    title: "Next.js Routing Guide",
    excerpt: "Understand routing in Next.js with file-based structure.",
    content: "Next.js uses file-based routing, meaning each file in /pages...",
    date: "2025-06-02",
  },
];

export default function BlogListPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}