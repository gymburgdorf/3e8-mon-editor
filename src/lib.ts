import './userWorker';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export function createEditor(el: HTMLElement, code: string) {
    monaco.editor.create(el,
    {
        value: code,
        automaticLayout: true,
        contextmenu: true,
        // fontFamily: "Fira Code",
        theme: "vs-dark",
        //scrollBeyondLastLine: false,
        fontSize: 22,
        insertSpaces: false,
        minimap: { enabled: false },
        scrollbar: {
            useShadows: false,
            //vertical: "auto",
            //horizontal: "visible",
            horizontalScrollbarSize: 12,
            verticalScrollbarSize: 12
        },
        language: "javascript"
    })
}