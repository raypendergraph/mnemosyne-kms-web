import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { JournalEntryWithAssociations } from '../models'

type JournalEntryListItemProps = {
  model: JournalEntryWithAssociations
}

export default function JournalEntryListItem({ model }: JournalEntryListItemProps): React.ReactElement {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={model.title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {model.updatedAt}
            </Typography>
            {`- ${model.caption}`}
          </React.Fragment>
        }
      />
    </ListItem>)
}
