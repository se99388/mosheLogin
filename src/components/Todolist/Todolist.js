import React, { useState, useEffect } from 'react';
import dataSerivce from '../../services/data-service'

export default ({ token }) => {
    const [dataState, setDataState] = useState([]);
    useEffect(() => {
        if (token) {
            dataSerivce.getData(token).then(data => {
                console.log(data)
                setDataState(data)
            })
        }
    }, [token])

    let dataOutput = [];
    if (dataState.length) {
        dataOutput = dataState.map(item => {
            return <div key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
            </div>
        })
    }


    return (token ? dataOutput : <div>Empty</div>)
}

import React, { useState, useEffect } from 'react';
import dataService from '../../services/data-service';

export default ({ token }) => {

    const [dataState, setDataState] = useState([]);

    useEffect(() => {
        if (token) {
            dataService.getData(token)
                .then(data => {
                    console.log(data)
                })
        }
    }, [token]);

    let dataOutput = [];

    if (dataState.length) {
        dataOutput = dataState.map(item => {
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                </div>
            )
        });
    }

    return (token ? dataOutput : <div>to do list component</div>)
}