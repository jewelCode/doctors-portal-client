import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://blooming-woodland-50920.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside use token', data)
                    const accessToken = data.token;
                    localStorage.setItem('acessToken', accessToken)
                    setToken(accessToken)
                })
        }

    }, [user]);

    return [token];
}

export default useToken;