import React from 'react';

function JobDetail() {
  // Normally, you'd fetch job details based on an ID or similar parameter.
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Job Title</h2>
      <p className="text-gray-700">Company Name</p>
      <p className="text-gray-600">Location: New York, NY</p>
      <p className="text-gray-600">Type: Full-time</p>
      <p className="my-4 text-gray-600">
        Job description goes here. It could be a detailed description of the job, including responsibilities, requirements, and how to apply.
      </p>
      <button onClick={()=>{alert("Dont apply here")}} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none">
        Apply Now
      </button>
    </div>
  );
}

export default JobDetail;
