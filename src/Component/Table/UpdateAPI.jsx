import React from 'react'
import axios from '../../../node_modules/axios/dist/axios.js'


const Update = (data) => {
    // console.log(data)
    
        const Date = prompt('Change date : yyyy-mm-dd', data.Date)
        const Time = prompt('Change Time : hh:mm', data.Time)
        const List = prompt('Change Tour List : ',data.List)

        const newdata = {
            Date,
            Time,
            List
        }
        
        axios.put(`http://localhost:3000/list/${data.id}`, newdata);
        window.location.reload(true)
    
}
export default Update