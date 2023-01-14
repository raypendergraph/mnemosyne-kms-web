import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListDisplayable } from '../../models';
import styles from './landing.module.css';
const state: ListDisplayable[] = [
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

  return <>
    <div className='has-text-centered'>
      <h1 className='is-size-1 has-text-success'>
        Mnemosyne
      </h1>
      <p className='is-size-3'>Bulma Input Styles</p>


      <div className='container'>
        <input className='input is-rounded'
          type='text'
          placeholder="What's on your mind today?" />
      </div>

    </div>
    <div className='container'>
      <h1 className='is-size-2'>
        Recent Activity
      </h1>
      <div className={styles.activitiesarea}>
        {recentActivity && recentActivity.map((a: ListDisplayable) => ActivityListItem(a))}
      </div>
    </div>
  </>

}
function ActivityListItem(item: ListDisplayable) {
  return <div className={styles.activity}>
    <h2>{item.title}</h2>
    <a>https://en.wikipedia.org/wiki/Mutual_exclusion</a> <button>▼</button>
    <p>{item.caption}</p>
  </div>
}

export default LandingPage

