import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Blossom } from '@fairdatasociety/blossom'

const blossom = new Blossom('ieecmehhdnadjhiniloaelillmahahlg')

const dappId = blossom.dappId || 'valami'

blossom.fdpStorage.personalStorage.create(dappId).then((pod) => console.log('pod', pod)).catch(err => console.log('error at pod creation', err))

console.log('dappId', dappId)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
