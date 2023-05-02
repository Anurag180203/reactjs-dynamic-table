import React from 'react'

const Table = () => {
  return (
    <div className="row">
        <div className='col-md-10 mx-auto mt-5'>
            <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th scope='col' className='text-center'>Sno.</th>
                        <th scope='col' className='text-center'>
                            <input type="text" 
                            className='form-control text-center bg-transparent text-white border-transparent border-0' 
                            value="Column 1"
                            style={{boxShadow: "none"}} 
                            />
                        </th>
                        <th scope='col' className='text-center'><button className='btn btn-outline-light btn-sm' type="button">Add column</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row' className='text-center py-2' colSpan={3}>
                            Please click on Add Row Button to add a row
                        </th>
                    </tr>
                </tbody>
            </table>
            
            <button type="submit" className='form-control btn btn-outline-dark btn-block mt-2'>
                Add Row
            </button>
        </div>
    </div>
  )
}

export default Table