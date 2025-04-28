import React from 'react';

const PostPage: React.FC = () => {
    return(
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 border-b border-gray-300 pb-1 text-black">posts</h2>
          
          <table className="w-full border-collapse">
            <tbody>
              <tr className="hover:bg-gray-200">
                <td className="py-2">
                  <span className="text-sm text-gray-500 mr-2">24 apr:</span>
                  <a href="#" className="text-blue-800 hover:underline">Domain-Driven Design with TypeScript</a>
                  <p className="text-sm text-gray-700 mt-1 ml-12">Exploring how to implement DDD principles in modern TypeScript applications.</p>
                </td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-200">
                <td className="py-2">
                  <span className="text-sm text-gray-500 mr-2">15 apr:</span>
                  <a href="#" className="text-blue-800 hover:underline">Building Accessible UIs with Tailwind</a>
                  <p className="text-sm text-gray-700 mt-1 ml-12">Best practices for creating inclusive interfaces using utility-first CSS.</p>
                </td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-200">
                <td className="py-2">
                  <span className="text-sm text-gray-500 mr-2">30 Mar:</span>
                  <a href="#" className="text-blue-800 hover:underline">State Management in 2025</a>
                  <p className="text-sm text-gray-700 mt-1 ml-12">Comparing modern state management solutions for React applications.</p>
                </td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-200">
                <td className="py-2">
                  <span className="text-sm text-gray-500 mr-2">12 Mar:</span>
                  <a href="#" className="text-blue-800 hover:underline">Next.js vs. Remix: A Practical Comparison</a>
                  <p className="text-sm text-gray-700 mt-1 ml-12">Looking at the key differences between these two React frameworks.</p>
                </td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-200">
                <td className="py-2">
                  <span className="text-sm text-gray-500 mr-2">28 Feb:</span>
                  <a href="#" className="text-blue-800 hover:underline">Type-Safe API Calls with React Query</a>
                  <p className="text-sm text-gray-700 mt-1 ml-12">How to leverage TypeScript with React Query for safer API interactions.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
    )
}

export default PostPage;