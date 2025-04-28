import React from 'react';
import Link from 'next/link';

const posts = [
  {
    date: '24 Apr',
    title: 'Domain-Driven Design with TypeScript',
    description: 'Exploring how to implement DDD principles in modern TypeScript applications.',
    href: '/posts/ddd-typescript',
  },
  {
    date: '15 Apr',
    title: 'Building Accessible UIs with Tailwind',
    description: 'Best practices for creating inclusive interfaces using utility-first CSS.',
    href: '/posts/accessible-tailwind',
  },
  {
    date: '30 Mar',
    title: 'State Management in 2025',
    description: 'Comparing modern state management solutions for React applications.',
    href: '/posts/state-management-2025',
  },
  {
    date: '12 Mar',
    title: 'Next.js vs. Remix: A Practical Comparison',
    description: 'Looking at the key differences between these two React frameworks.',
    href: '/posts/next-vs-remix',
  },
  {
    date: '28 Feb',
    title: 'Type-Safe API Calls with React Query',
    description: 'How to leverage TypeScript with React Query for safer API interactions.',
    href: '/posts/react-query-typescript',
  },
];

const PostPage: React.FC = () => {
    return(
      <section className="mb-10">
      <h2 className="text-2xl font-serif mb-4 border-b border-gray-300 pb-1 text-black">posts</h2>
      <table className="w-full border-collapse">
        <tbody>
          {posts.map((post, index) => (
            <tr key={index} className="border-t border-gray-200 hover:bg-gray-200">
              <td className="py-2">
                <span className="text-sm text-gray-500 mr-2">{post.date}:</span>
                <Link href={post.href} className="text-blue-800 hover:underline">{post.title}</Link>
                <p className="text-sm text-gray-700 mt-1 ml-12">{post.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    )
}

export default PostPage;