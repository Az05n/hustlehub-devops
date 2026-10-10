import React from 'react'

const profile1 = () => {
  return (
    
    <div className="p-6">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">John Doe</h2>
          <p className="text-gray-500">Web Developer | Designer</p>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">React</span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">UI/UX</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile1