import React from 'react'
import EntryLine from './EntryLine'

const EntryLines = ({ entries, deleteEntry }) => {
  return (
    <>
        {entries && entries.map((entry) => (
            <EntryLine key={entry.id} {...entry} deleteEntry={deleteEntry} />
        ))}  
    </>
  )
}

export default EntryLines