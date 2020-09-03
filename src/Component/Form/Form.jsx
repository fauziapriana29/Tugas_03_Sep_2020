import React from "react";
import { useForm } from 'react-hook-form'
import './Form.css'
import axios from '../../../node_modules/axios/dist/axios.js'

const Form = () => {

    const { handleSubmit, register } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        axios.post(" http://localhost:3000/list", data).then((respone) => {
            // alert('data berhasil masuk')
            window.location.reload(true)
        }).catch((error) => {
            alert('error')
        });
    }


  return (
    <div className="inputContainer">
      <form id="addList" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text spantext">Form List</span>
          </div>
          <input
            type="date"
            aria-label="Date"
            className="form inpdate formDate"
            name="Date"
            id="inputDate"
            title="Add Date"
            ref={register({ required: "Tanggal kosong" })}
          />
          <input
            type="time"
            aria-label="Date"
            className="form inptime "
            id="inputTime"
            name="Time"
            title="Add Time"
            ref={register({ required: "Waktu Kosong" })}
          />
          <input
            type="text"
            aria-label="List"
            className="inplist form"
            id="inputList"
            name="List"
            placeholder="Create Your List Here"
            title="Create list"
            ref={register({ required: "List Kosong" })}
          />
          <div className="contbutton">
            <button
              className="btn btn-warning"
              id="addBook"
              title="Submit Your List"
            >
              <i className="fas fa-plus fa-2x"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
