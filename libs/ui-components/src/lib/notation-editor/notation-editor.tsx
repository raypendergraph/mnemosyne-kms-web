import styles from './notation-editor.module.css';

/* eslint-disable-next-line */
export interface NotationEditorProps {}

export function NotationEditor(props: NotationEditorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NotationEditor!</h1>
    </div>
  );
}

export default NotationEditor;
