import React from 'react'
import SaveToJSON from './components/SaveToJSON'
import SaveToExcel from './components/SaveToExcel'


const Header = () => {
  return (
    <div className="row mb-5">
        <div className="col-md-10 mt-5 mx-auto d-flex justify-content-between align-items-center">
            <a href="/" className='fw-bold ms-5 text-decoration-none text-dark'>
                Reacjs Dynamic Table
            </a>

            <div className='d-flex align-items-center justify-content-end gap-1'>
                <p className='my-0'>Colums : 0</p>
                <p className='my-0'>Rows : 0</p>

                <button className='ms-1 btn btn-outline-dark'>Add Column</button>
                <button className='btn btn-outline-dark'>Add Row</button>

                <SaveToJSON />
                <SaveToExcel />
            </div>
        </div>
    </div>
  )
}

export default Header;
