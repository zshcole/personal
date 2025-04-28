import React from 'react'
import Link from 'next/link'

const ProjectPage: React.FC = () => {
    return(
        <section className="mb-10">
        <h2 className="text-2xl font-serif mb-4 border-b border-gray-300 pb-1 text-black">projects</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 border border-gray-300">
            <h3 className="font-serif font-bold text-black">e-commerce platform</h3>
            <p className="text-gray-700 text-sm my-2 font-serif">a full-stack e-commerce solution built with Next.js and Supabase, featuring product catalog, shopping cart, user authentication, and payment processing.</p>
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs font-mono text-black">
                next.js | typeScript | tailwind | supabase | stripe
              </div>
              <div className="space-x-2">
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">demo</a>
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">code</a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border border-gray-300">
            <h3 className="font-serif font-bold text-black">task management app</h3>
            <p className="text-gray-700 text-sm my-2 font-serif">a productivity tool with drag-and-drop interface and real-time updates. features include task categorization, due dates, priority levels, and team collaboration.</p>
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs text-black font-mono">
                react | firebase | typescript | react DnD
              </div>
              <div className="space-x-2">
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">demo</a>
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">code</a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border border-gray-300">
            <h3 className="font-serif font-bold text-black">developer blog</h3>
            <p className="text-gray-700 text-sm my-2 font-serif">personal blog site built with next.js and mdx for content management. features syntax highlighting, responsive design, and fast load times.</p>
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs text-gray-500 font-mono">
                next.js | mdx | typescript | tailwind
              </div>
              <div className="space-x-2">
                <Link href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">demo</Link>
                <Link href="https://github.com/zshcole/personal" target="_blank" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">code</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProjectPage