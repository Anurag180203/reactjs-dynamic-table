import React from 'react'

const SaveToJSON = ({columns, rows }) => {

  const convertToJSON = () => {
    let data = [];
    rows.map((row, index) => {
      let obj = { Sno: index + 1 };
      columns.map((col, colId) => {
        obj[col]= row[colId];
      });
      data.push(obj);
    });

    let fileData = JSON.stringify(data);
    let fileBlob = new Blob([fileData], { type: "text/plain" });
    let fileURL = URL.createObjectURL(fileBlob);
    let a = document.createElement("a");
    a.href= fileURL;
    (a.download = `data.json`); 
    a.click();
  }
  return (
    <button type="button" onClick={() => convertToJSON()} className='btn btn-success'>
        Save as JSON
    </button>
  )
}

export default SaveToJSON