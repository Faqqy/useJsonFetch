import React from 'react';
import useJsonFetch from '../hooks/JsonFetch';

const Success: React.FC = () => {
  const [data, loading, error] = useJsonFetch<{ status: string }>('http://localhost:7070/data');

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {data.status}</p>}
    </div>
  );
};

export default Success;