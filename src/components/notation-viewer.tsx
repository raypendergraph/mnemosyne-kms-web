import React, {DOMElement, HTMLAttributes, useEffect, useState} from "react";
import styles from './notation-viewer.module.css';
import {renderCreoleMarkup} from "./antlr/creole";

export interface NotationViewerProps {
  notationContent: string | undefined
}

export function NotationViewer({notationContent}: NotationViewerProps) {
  const [notationRoot, setNotationRoot] = useState<DOMElement<HTMLAttributes<unknown>, Element> | undefined>(undefined)
  useEffect(()=>{
    if (notationContent === '' || notationContent === undefined){
      return
    }
    (async function(){
      setNotationRoot(renderCreoleMarkup(notationContent))
    })()
  }, [notationContent])

  if (notationRoot === undefined) {
    return <div>Waiting.....</div>
  }

  return (
    <div>
      {notationRoot}
    </div>
  );
}

export default NotationViewer;
