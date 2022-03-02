import React from 'react';
import ReactDOM from 'react-dom';
import Filter1 from "./components/filter1";
import Table1 from "./components/table1";
import Table2 from "./components/table2";

// Filter bar at top of page
ReactDOM.render(
  <React.StrictMode>

     <Filter1></Filter1>

  </React.StrictMode>,
  document.getElementById('filters')
);

// Table1 below filters
ReactDOM.render(
  <React.StrictMode>

     <Table1></Table1>

  </React.StrictMode>,
  document.getElementById('table1')
);

// Table2 below filters
ReactDOM.render(
  <React.StrictMode>

     <Table2></Table2>

  </React.StrictMode>,
  document.getElementById('table2')
);
