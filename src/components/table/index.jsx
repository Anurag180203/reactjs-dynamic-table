import React from 'react'
import { toast } from 'react-toastify';

const Table = ({ columns, rows, addRow, addColumn, setColumns, setRows }) => {

    const handleColumnChange = (value, index) => {
        setColumns((prevColumns) => prevColumns.map((column,id) => id === index ? value : column));
    }

    const handleRowChange = (value, index, columnIndex) => {
        setRows((prevRows) => 
        prevRows.map((row,id) => (id === index ? 
        row.map((col,colId) => (columnIndex === colId? value : col)) 
        : row)));
    }

    const deleteColumn = (index) => {
        if(columns.length > 1)
        {
            setColumns((prevColumns) => prevColumns.filter((column,id) => id !== index));
            if(rows.length > 0)
            {
                setRows((prevRows) => prevRows.map((row) => row.filter((column,id) => id !== index)));
            }
        } else {
             toast.dark('Minimum 1 column required');
        }
    }

    const deleteRow = (index) => {
        setRows((prevRows) => prevRows.filter((row,id) => id !== index));
    }

  return (
    <div className="row">
        <div className='col-md-10 mx-auto mt-5'>
            <table className='table table-bordered table-responsive'>
                <thead>
                    <tr className='bg-white'>
                        <th></th>
                        {columns.map((column,index) => (
                            <th scope='col' className='text-center' key={index * 4653215}>
                                <button type='button'
                                onClick={() => deleteColumn(index)} 
                                className='btn btn-block form-control btn-outline-danger btn-sm'>
                                    Delete
                                </button>
                            </th>
                        ))}                        
                        <th></th>
                    </tr>
                    <tr className='bg-dark text-white'>
                        <th scope='col' className='bg-dark text-center'>Sno.</th>
                        {columns.map((column,index) => (
                            <th scope='col' className='bg-dark text-center' key={index * 455465}>
                            <input type="text" 
                            onChange={(e) => handleColumnChange(e.target.value,index)}
                            className='form-control text-center bg-transparent text-white border-transparent border-0' 
                            value={column}
                            style={{boxShadow: "none"}} 
                            />
                            </th>
                        ))}
                        <th scope='col' className='bg-dark text-center'>
                            <button className='btn btn-outline-light btn-sm' type="button" onClick={() => addColumn()}>Add column</button>
                        </th>
                    </tr>
                </thead>
                <tbody> 
                   {
                   rows.length<1 ?
                   (<tr>
                        <th scope='row' className='text-center py-2' colSpan={columns.length+2}>
                            Please click on Add Row Button to add a row
                        </th>
                    </tr>):
                    rows.map((row,index) => (
                        <tr key={index * 4516164683}>
                            <th scope='row' className='text-center'>{index + 1}</th>
                            {row.map((rowColumn,rowColumnIndex) => (
                                <td key={rowColumnIndex / 4564879676}>
                                    <input type="text" className='form-control text-center' 
                                    placeholder='Enter value'
                                    value={rowColumn}
                                    onChange={(e) => handleRowChange(e.target.value,index,rowColumnIndex)}
                                    />
                                </td>
                            ))}
                            <td className='text-center'>
                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => deleteRow(index)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            
            <button type="submit" onClick={() => addRow()} className='form-control btn btn-outline-dark btn-block mt-2'>
                Add Row
            </button>
        </div>
    </div>
  )
}

export default Table