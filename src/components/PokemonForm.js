import React, { useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

  const[formData,setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })
  
  
  const handleFormData =(e) =>{
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form  onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value = {formData.name}  onChange ={handleFormData}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp"  value = {formData.hp} onChange ={handleFormData}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = {formData.frontUrl}
            onChange ={handleFormData}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {formData.backUrl}
            onChange ={handleFormData}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
  }

export default PokemonForm;
