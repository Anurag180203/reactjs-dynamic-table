import React from 'react'
import { convertDataToJSON } from '../../../methods';

const SaveToJSON = ({columns, rows }) => {

  const downloadJSONFile = () => {
    const data = convertDataToJSON({ columns, rows });

    let fileData = JSON.stringify(data);
    let fileBlob = new Blob([fileData], { type: "text/plain" });
    let fileURL = URL.createObjectURL(fileBlob);
    let a = document.createElement("a");
    a.href= fileURL;
    (a.download = `data.json`); 
    a.click();
  }
  return (
    <button type="button" onClick={() => downloadJSONFile()} className='btn btn-success'>
        Save as JSON
    </button>
  )
}

export default SaveToJSON