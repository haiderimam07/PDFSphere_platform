import React from 'react'


interface UsernamePageProps {
  params: {
    username: string; // The 'username' property must be a string
  };
}
const Username = ({params}:UsernamePageProps) => {
  return (
    <div>
      {params.username}
    </div>
  )
}

export default Username
