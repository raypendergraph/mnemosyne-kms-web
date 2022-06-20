import styles from './notationEdit.module.css';
import {NotationEditor} from "@mnemosyne-wiki/ui-components";
import {useLocation} from "react-router-dom"
import {useEffect, useState} from "react";
import {Notation} from "@mnemosyne-wiki/data-access";
import {Navigate} from "react-router-dom";
/* eslint-disable-next-line */


function onChange(value: string, event?: any): void {
  console.log(value, event)
}

export function NotationEditPage() {
  const query = new URLSearchParams(useLocation().search);
  const [notation, setNotation] = useState<Notation | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    (async ()=> {
      const notationId = query.get("notationId")
      // if not valid id route to 404
      try{
        const notation = undefined; // go fetch notation for id
        setNotation(notation)
      } catch (e: any) {
          setError(e)
      }
    })()
  },[])
  if (error) {
    return <Navigate to='/somewhere/'/>
  }
  if (notation) {
    return <div>
      <NotationEditor onChange={(s) => {}}/>
      {/*<NotationView />*/}
    </div>
  }

  return <div> Loading.... </div>


  return (
    <NotationEditor onChange={onChange}/>
);
}

export default NotationEditPage;
