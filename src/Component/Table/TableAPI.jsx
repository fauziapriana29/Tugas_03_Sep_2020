import React, {useState, useEffect} from 'react'
import axios from '../../../node_modules/axios/dist/axios.js'
import Table from './IsiTable.jsx'
import './Table.css'

const API = () => {

    const [list, setList] = useState([])

    const fetchApi = () => {
        axios.get(" http://localhost:3000/list").then((respone) => {
            // console.log(respone.data)
            const data = respone.data
            setList(data)
        }).catch((error) => [
            console.log(error)
        ]);
    }
    useEffect(() => {
        fetchApi();
    }, []);

    
    return(
        <div>
            <h3 className="title-list">Your List</h3>
            <Table list={list}/>
        </div>
    )
}

export default API