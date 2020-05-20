import React from 'react';
import '../index.css';

export default function Form(props) {
  const { values, onInputChange, onSubmit } = props;
  return (
    <form className="container" onSubmit={onSubmit}>
      <h3>Add a New Team Member</h3>

      <label>
        Name:&nbsp;
        <input
          type="text"
          placeholder="..."
          maxLength="30"
          name="name"
          value={values.name}
          onChange={onInputChange}
          pattern="[a-zA-Z]*"
          title="Letters Only"
        />
      </label>
      <label>
        Email:&nbsp;
        <input
          type="email"
          placeholder="..."
          maxLength="50"
          name="email"
          value={values.email}
          onChange={onInputChange}
        />
      </label>
      <label>
        Role:&nbsp;
        <select
          name="role"
          value={values.role}
          onChange={onInputChange}
          required
        >
          <option value="">Select A Role</option>
          <option value="Front-End">Front-End Developer</option>
          <option value="Back-End">Back-End Developer</option>
          <option value="UX/UI">UX/UI Designer</option>
          <option value="DataScience">Data Scientist</option>
          <option value="iOS">iOS Developer</option>
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}
