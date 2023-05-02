import "./App.css";
import { Header,Table } from './components';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [columns,setColumns] = useState(["Column 1"]);
  const [rows,setRows] = useState([]);

  const addColumn = () => {
    if(columns.length === 9){toast.dark("You can add maximum 9 columns"); return;}
    setColumns((prevColumns) => [...prevColumns,`Column ${prevColumns.length + 1}`]);
    if(rows.length > 0)
    {
      setRows((prevRows) => prevRows.map((row) => [...row,""]));
    }
  }

  const addRow = () => {
    setRows((prevRows) => [...prevRows,columns.map((col) => "")]);
  }



  return (
    <div className="container-fluid">
      <ToastContainer />
      <Header columns={columns} rows={rows} addColumn={addColumn} addRow={addRow}/>
      <Table columns={columns} rows={rows} addColumn={addColumn} addRow={addRow} setColumns={setColumns} setRows={setRows}/>
    </div>
  );
};

export default App;
