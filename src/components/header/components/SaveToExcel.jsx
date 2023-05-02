import React from 'react'
import exportFromJSON from 'export-from-json';
import { convertDataToJSON } from '../../../methods';

const SaveToExcel = ({ rows, columns }) => {

  const downloadExcelFile = () => {
    const data = convertDataToJSON({ rows,columns });

    const fileName = 'data';
    const exportType = exportFromJSON.types.xls;

    exportFromJSON({ data, fileName, exportType });
  }

  return (
    <button type="button" onClick={() => downloadExcelFile()} className='btn btn-success'>
        Export Excel
    </button>
  )
}

export default SaveToExcel