import React, { useState } from 'react';
import Form from './Form';
import TeamMate from './TeamMate';
import { v4 as uuid } from 'uuid';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

export default function App() {
  const [teamList, setTeamList] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [memberToEdit, setMemberToEdit] = useState({});

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return;
    }
    const newMember = { ...formValues, id: uuid() };
    setTeamList([...teamList, newMember]);
    setFormValues(initialFormValues);
  };

  const onEditMember = (item) => {
    console.log(item);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Current Team Members</h1>
      </header>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {teamList.map((person) => {
        return (
          <TeamMate key={person.id} details={person} edit={onEditMember} />
        );
      })}
    </div>
  );
}
