import React from 'react'
import './Table.css'

const Table = (props) => {
  const { list } = props

  const mapList = list.map((data, index) => {

    return (
      <tr key={index}>
        <th scope="row" className="isi-no">{index + 1}</th>
        <td className="isi-time">{data.Date}</td>
        <td className="isi-time">{data.Time}</td>
        <td className="isi-list">{data.List}</td>
        <td>
          <button className="btn btn-danger">
            <i className="far fa-trash-alt fa-lg"></i>
          </button>{" "}
          &nbsp;
          <button className="btn btn-secondary">
            <i className="fas fa-pencil-alt fa-lg"></i>
          </button>
        </td>
      </tr>
    );

  })

    return (
      <div className="container con-table">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="no-th">No.</th>
              <th scope="col" className="date-th">Date</th>
              <th scope="col" className="time-th">Time</th>
              <th scope="col" className="list-th  ">List</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {mapList}
          </tbody>
        </table>
      </div>
    );
}

export default Table