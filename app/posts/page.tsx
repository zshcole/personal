import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface Post {
  date: string;
  title: string;
  description: string;
  slug: string;
}

export default async function PostsPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const slug = filename.replace(/\.mdx$/, '');

      return {
        date: data.date,
        title: data.title,
        description: data.description || '',
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
<section className="mb-10">
  <h2 className="text-3xl font-serif mb-6 border-b border-gray-400 pb-2 text-gray-800 font-medium">posts</h2>
  <div className="space-y-4">
    {posts.map((post) => (
      <div key={post.slug} className="p-4 rounded-md hover:bg-gray-100 transition duration-150 border border-gray-200 shadow-sm">
        <div className="flex items-baseline">
          <span className="text-sm font-medium text-gray-600 mr-3">{post.date}</span>
          <Link href={`/posts/${post.slug}`} className="text-lg font-medium text-blue-700 hover:text-blue-900 hover:underline">
            {post.title}
          </Link>
        </div>
        <p className="text-base text-gray-700 mt-2">{post.description}</p>
      </div>
    ))}
  </div>
</section>
  );
}