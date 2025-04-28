import React from 'react'

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
                Next.js | TypeScript | Tailwind | Supabase | Stripe
              </div>
              <div className="space-x-2">
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">demo</a>
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">code</a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border border-gray-300">
            <h3 className="font-serif font-bold text-black">task management app</h3>
            <p className="text-gray-700 text-sm my-2 font-serif">A productivity tool with drag-and-drop interface and real-time updates. Features include task categorization, due dates, priority levels, and team collaboration.</p>
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs text-black font-mono">
                React | Firebase | TypeScript | React DnD
              </div>
              <div className="space-x-2">
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">demo</a>
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">code</a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border border-gray-300">
            <h3 className="font-serif font-bold text-black">developer blog</h3>
            <p className="text-gray-700 text-sm my-2 font-serif">Personal blog site built with Next.js and MDX for content management. Features syntax highlighting, responsive design, and fast load times.</p>
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs text-gray-500 font-mono">
                Next.js | MDX | TypeScript | Tailwind
              </div>
              <div className="space-x-2">
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">demo</a>
                <a href="#" className="text-xs bg-gray-200 px-2 py-1 hover:bg-gray-300 inline-block text-black">code</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProjectPage