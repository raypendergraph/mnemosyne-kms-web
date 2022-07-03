import React, {useEffect, useRef, useState} from "react";
import {NotationEditor, NotationViewer} from "@mnemosyne-wiki/ui-components";
import {distinctUntilChanged, Subject, throttleTime, timer, withLatestFrom} from 'rxjs'

export function NotationEditPage() {
  const [viewerContent, setViewerContent] = useState<string>("")
  const editorChanges$ = useRef(new Subject<string>())

  useEffect(() => {
    const subscription = editorChanges$.current
      .pipe(throttleTime(500, undefined, {leading: false, trailing: true}))
      .subscribe((content) => setViewerContent(content))
    return () => {
      subscription.unsubscribe()
      editorChanges$.current.complete()
    }
  }, [])

  const handleChange = function (content: string){
    editorChanges$.current.next(content)
  }

  return <>
    <NotationEditor onChange={handleChange}/>
    <NotationViewer notationContent={viewerContent} />
  </>
}

export default NotationEditPage;
