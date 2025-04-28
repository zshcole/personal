import React from 'react'

const AboutPage: React.FC = () => {
    return (
        <section className="mb-10">
          <h2 className="text-2xl font-mono mb-4 border-b border-gray-300 pb-1 text-black">about</h2>
          
          <div className="mb-6 font-serif text-gray-700">
            <p className="mb-4">
            hi, i'm colburn, who enjoys building reliable solutions for complex problems. currently helping improve the checkout experience at <b>New Balance</b>, where I work on making online shopping smoother for everyone. 
            </p>
            
            <p className="mb-4">
              my approach to development is rooted in domain-driven design principles, focusing on modeling the business domain first and letting the technical implementation follow.
              i believe in writing clean, maintainable code that stands the test of time.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-mono mb-2 text-black">skills & technologies</h3>
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4 font-mono font-bold text-black" width="120">frontend</td>
                  <td className="py-2 text-gray-700">react, next.js, javaScript | typescript, chakra ui</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4 font-mono font-bold text-black">backend</td>
                  <td className="py-2 text-gray-700">node.js, c#, salesforce | sfcc, managed runtime architecture, postgresql</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 pr-4 font-mono font-bold text-black">devops</td>
                  <td className="py-2 text-gray-700">docker, github actions, vercel, railway</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h3 className="text-lg font-mono mb-2 text-black">experience</h3>
            <div className="mb-4">
              <div className="flex items-baseline justify-between border-b border-gray-300 py-1">
                <span className="font-mono text-black">senior software engineer</span>
                <span className="text-sm text-gray-600"><b>2023 - present</b></span>
              </div>
              <div className="text-sm mt-1 text-gray-700">
                <b>New Balance</b> <br />
                — contributed to the development of cart and checkout flows for a Progressive Web App (PWA) used by retail associates.
                <br />
                — building reliable solutions in checkout to enhance the checkout <b>BOPIS</b> experience, optimizing performance and implementing user-friendly features.
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline justify-between border-b border-gray-300 py-1">
                <span className="font-mono text-black">full stack developer</span>
                <span className="text-sm text-gray-600"><b>2020 - 2023</b></span>
              </div>
              <div className="text-sm mt-1 text-gray-700">
                <b>Red Cedar Enterprises, LLC</b> — full stack developer, building and maintaining data repository and reporting tools for USTRANSCOM Consolidated Architecture Tool Suite (CATS) and USTRANSCOM Global Transportation Network (GTN). 
              </div>
            </div>
          </div>
        </section>
    )
}

export default AboutPage