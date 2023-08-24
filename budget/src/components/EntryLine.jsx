import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

const EntryLine = ({ title, value, isExpense }) => {
  return (
    <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
            <Grid.Row>
                <Grid.Column width={10} textAlign="left">{title}</Grid.Column>
                <Grid.Column width={3}>${value}</Grid.Column>
                <Grid.Column width={3}>
                    <Icon name="edit" />
                    <Icon name="trash" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
  )
}

export default EntryLine