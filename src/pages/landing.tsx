import React from 'react'
import { Box, List, Pagination, Typography } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as models from '../models';
import { ListDisplayable } from '../components'
import { Container } from '@mui/system';
const state: models.ListDisplayable[] = [
  {
    uuid: uuidv4(),
    title: 'entry on 12/1/2022',
    caption: 'Its the first of December...',
    entityKind: 'journal_entry'
  },
  {
    uuid: uuidv4(),
    title: 'entry on 11/28/2022',
    caption: 'Today something strange happened...',
    entityKind: 'journal_entry'
  },
  {
    uuid: uuidv4(),
    title: 'The SOLID principle',
    caption: 'Stuff about the SOLID principle...',
    entityKind: 'concept'
  },
  {
    uuid: uuidv4(),
    title: 'Apple Inc.',
    caption: 'Apple is a silicon vally computer and tech...',
    entityKind: 'organization'
  },
  {
    uuid: uuidv4(),
    title: 'entry on 11/25/2022',
    caption: 'I had a wreck today...',
    entityKind: 'journal_entry'
  },
  {
    uuid: uuidv4(),
    title: 'entry on 11/24/2022',
    caption: 'bla bla bla bla',
    entityKind: 'journal_entry'
  },
]
type LandingPageProps = {};

export function LandingPage(props: LandingPageProps): ReactElement | null {
  const [recentActivity, setRecentActivity] = useState(state)
  useEffect(() => setRecentActivity(state), [])
  return (
    <Container>
      <Typography variant='h1'>Recent Activity</Typography>
      <Box>
        <List>
          {recentActivity?.map((m: models.ListDisplayable) => <ListDisplayable model={m}/>)}
        </List>
      </Box>
      <Pagination count={10} />
    </Container>)
}

