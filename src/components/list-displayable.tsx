import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { ListDisplayable as Model } from "../models";

export type ListDisplayableProps = {
  model: Model
}
export function ListDisplayable({ model }: ListDisplayableProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
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
              Ali Connors
            </Typography>
            {model.caption}
          </React.Fragment>
        }
      />
    </ListItem>)
}