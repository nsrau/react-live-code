import React from 'react';
import 'codemirror/keymap/sublime';
import CSS from './CSS/CSS';
import JS from './JS/JS';
import HTML from './HTML/HTML';
import Page from './Page/Page';

function App() {

  return (
    <div className="app">
      <div className="code-editor">
        <HTML />
        <CSS />
        <JS />
      </div>
      <div className="content-editor">
        <Page />
      </div>
    </div>
  );
}

export default App;
