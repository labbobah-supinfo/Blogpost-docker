import './App.css';
import React from 'react';
import data from './data';
import Article from './Article';

export default function App() {
    return(
        <div>
          <Article item={data} />
        </div>
  );
}