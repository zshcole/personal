'use client'
import React from 'react';
import Link from 'next/link';
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-white-100 text-black">
        <>
          <section className="mb-10">
            <div className="mb-6">
              <h2 className="text-2xl font-serif mb-2 border-b border-gray-300">software enigneer</h2>
              <p className="text-gray-700 font-serif">building digital experiences with typescript, react, and modern web technologies. 
                <br/> currently focused on domain-driven design and ai systems in production. 
                <br/> exploring creative use cases of ai in education and entertainment.</p>
              <p className="text-gray-700 font-serif">also reading <b>ai engineering</b> by chip huyen.</p>
              <p className="text-gray-700 font-serif">i enjoy learning about fun technical challenges and collaborating with great teams.</p>
            </div>
            <Link href="/projects" className="bg-orange-600 text-white px-2 py-1 text-sm font-mono hover:bg-orange-700">view projects</Link>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-serif mb-4 border-b border-gray-300 pb-1">latest posts</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="hover:bg-gray-200">
                  <td className="py-2">
                    <span className="text-sm text-gray-500 mr-2">24 Apr:</span>
                    <Link href="#" className="text-blue-800 hover:underline">Domain-Driven Design with TypeScript</Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="py-2">
                    <span className="text-sm text-gray-500 mr-2">15 Apr:</span>
                    <Link href="#" className="text-blue-800 hover:underline">Building Accessible UIs with Tailwind</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-1">
            <h3 className="text-lg font-serif mb-4 border-b border-gray-300 pb-1">featured projects</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 border border-gray-300">
                <h4 className="font-mono font-bold">e-commerce platform</h4>
                <p className="text-gray-700 text-sm my-2 font-serif">a full-stack e-commerce solution built with next.js and supabase.</p>
                <div className="text-xs text-gray-500 font-mono">
                  next.js | typescript | tailwind
                </div>
              </div>
              <div className="bg-gray-50 p-4 border border-gray-300">
                <h4 className="font-mono font-bold">task management app</h4>
                <p className="text-gray-700 text-sm my-2 font-serif">a productivity tool with drag-and-drop interface and real-time updates.</p>
                <div className="text-xs text-gray-500 font-mono">
                  react | firebase | typescript
                </div>
              </div>
            </div>
          </section>
        </>
  </div>

  );
}
