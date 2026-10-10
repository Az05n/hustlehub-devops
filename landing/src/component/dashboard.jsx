import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Stat Cards */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <h3 className="text-lg font-semibold">Gigs Completed</h3>
        <p className="text-3xl font-bold text-green-500">12</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <h3 className="text-lg font-semibold">Skills Earned</h3>
        <p className="text-3xl font-bold text-blue-500">5</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <h3 className="text-lg font-semibold">Ongoing Gigs</h3>
        <p className="text-3xl font-bold text-orange-500">3</p>
      </div>

      {/* Recent Activity */}
      <div className="col-span-3 bg-white shadow-md rounded-xl p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3">
          <li className="text-gray-700">✅ Completed a gig: "UI Design for Hackathon"</li>
          <li className="text-gray-700">🛠️ Joined a gig: "Backend for College Portal"</li>
          <li className="text-gray-700">⭐ Earned new skill: "React Basics"</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
