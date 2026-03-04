import React from 'react';

const JobDetails = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      {id}
    </div>
  );
};

export default JobDetails;