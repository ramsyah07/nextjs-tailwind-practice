import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border rounded p-4 hover:shadow-md bg-white">
        <h2 className="text-xl font-bold text-blue-600">{post.title}</h2>
        <p className="text-gray-500 text-sm">{post.date}</p>
        <p className="mt-2 text-gray-700 text-sm line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
