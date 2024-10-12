import React from 'react';
import JobCard from './JobCard';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'New York, NY', type: 'Full-time' },
  { id: 2, title: 'Backend Developer', company: 'Innovate Inc.', location: 'San Francisco, CA', type: 'Part-time' },
  { id: 3, title: 'Data Scientist', company: 'DataWorld', location: 'Remote', type: 'Contract' },
];

function JobList() {
  return (
    <div>
      <h2 className="text-3xl font-bold my-8">Job Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
