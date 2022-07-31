import React, {useState} from 'react';
import Layout from "../components/Layout";
import FormField from "../components/FormField";
import {useCreateCardMutation} from "../store/cards/cards.api";
import {useNavigate} from "react-router-dom";

const AddNewPage = () => {
  const navigate = useNavigate()
  const [createCard, {isError}] = useCreateCardMutation()
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [damage, setDamage] = useState<string>('')
  const [health, setHealth] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (name && description && +damage && +health) {
      createCard({ name, description, damage: +damage, health: +health }).then(() => {
        navigate('/cards')
      })
    }
  }

  return (
    <Layout>
      <div className="font-bold text-lg text-center mb-8">Create card</div>
      {isError && <p className="text-red-500">Server error...</p>}
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormField
          label="Damage"
          type="number"
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
        />
        <FormField
          label="Health"
          type="number"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="border border-gray-300 rounded px-6 py-1 bg-emerald-400 text-white hover:bg-emerald-300"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default AddNewPage;
