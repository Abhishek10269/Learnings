import React from 'react';

function JobCard({ job }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-blue-500">{job.type}</p>
      <button onClick={()=>{alert('Dont Apply Here')}} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
        View Details
      </button>
    </div>
  );
}

export default JobCard;
