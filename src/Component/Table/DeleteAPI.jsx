import React from 'react'
import axios from '../../../node_modules/axios/dist/axios.js'

  const Delete = (data) => {
    // console.log(data.id);
    // alert(data)
      let confirm = window.confirm('Are you Sure Delete this List ?')

      if (confirm === true) {
          axios
            .delete(`http://localhost:3000/list/${data.id}`)
            .then((respone) => {
              // alert("List di hapus");
              window.location.reload(true);
            })
            .catch((error) => {
              alert(error);
            });
      } else {
          alert('Cencel delete list')
      }
      
      

    return null;
  };

export default Delete