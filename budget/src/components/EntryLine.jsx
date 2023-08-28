import React, { useState } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import ModalEdit from './ModalEdit'

const EntryLine = ({ id, title, value, isExpense = false, deleteEntry}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{title}</Grid.Column>
            <Grid.Column width={3}>${value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => setOpen(true)} />
              <Icon name="trash" onClick={() => { deleteEntry(id) } } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={open} />
    </>
  )
}

export default EntryLine