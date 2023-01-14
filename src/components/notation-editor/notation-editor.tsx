import styles from './notation-editor.module.css';
import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/mode-rst";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import AceEditor from "react-ace";
import React from 'react';
import { Notation } from '../../models';

/* eslint-disable-next-line */
export interface NotationEditorProps {
  notation?: Notation
  onChange: (value: string, event?: any) => void
}

export function NotationEditor({onChange, notation}: NotationEditorProps) {
  return (
    <AceEditor
      mode="java"
      theme="github"
      onChange={onChange}
      editorProps={{ $blockScrolling: true }}
    />
  );
}

export default NotationEditor;
