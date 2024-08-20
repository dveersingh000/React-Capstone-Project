import React, { useState} from 'react'
import styles from './Form.module.css';

function Form() {
    const validationForm = () => {

    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(false);
  return (
    <div className={styles.container}>
        <input 
            type="text" 
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input 
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="text" 
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
    </div>
  )
}

export default Form