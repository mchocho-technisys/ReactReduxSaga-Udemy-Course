import React, { useState } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

const NewEntryForm = ({addEntry}) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);

  return (
    <Form unstackable>
    <Form.Group>
      <Form.Input 
        icon="tags" 
        width={12} 
        label="Description" 
        placeholder="New shinny thing" 
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Form.Input 
        icon="dollar"
        iconPosition="left" 
        width={4} 
        label="Value" 
        placeholder="100.00"
        value={value} 
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </Form.Group>
    <Segment compact>
        <Checkbox label="Is expense" toggle onChange={() => {setIsExpense(!isExpense)}} checked={isExpense}/>
    </Segment>

    <ButtonSaveOrCancel addEntry={addEntry} title={title} value={value} isExpense={isExpense}/>
  </Form>
  )
}

export default NewEntryForm