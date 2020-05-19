import React from 'react';
import '../index.css';

export default function TeamMate(props) {
  const { details, edit } = props;
  if (!details) {
    return <h3>Fetching their details...</h3>;
  }
  return (
    <div className="container">
      <h2>Name: {details.name}</h2>
      <h4>Email: {details.email}</h4>
      <h4>Role: {details.role}</h4>
      <button onClick={() => edit(details.id)}>Edit</button>
    </div>
  );
}
