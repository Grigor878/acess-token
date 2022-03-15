import React, { useState, useEffect } from 'react'
import api from './api/posts'

function Accessed() {
    const [user, setUser] = useState([]);
    const [id, setId] = useState(1)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`/${id}`);
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
    }, [id])

    console.log(user.data)

    return (
        <div className='container'>
            <p className='accessed'>User page</p>
            {/* <input type="text" onChange={e => setId(e.target.value)} value={id} /> */}
        </div>
    )
}

export default Accessed
