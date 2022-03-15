import React, { useState, useEffect } from 'react'
import api from './api/posts'

function Accessed() {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`/${2}`);
                setUser(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
        fetchUser();
    }, [])
    console.log(user)

    return (
        <div className='container'>
            <p className='accessed'>User page</p>
        </div>
    )
}

export default Accessed