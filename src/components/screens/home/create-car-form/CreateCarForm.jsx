import { useState } from 'react'
import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
    const [name, setName] = useState('')

    const createCar = () => {
        console.log(name)
    }

    return (
        <form className={styles.form}>
            <input placeholder='Name'/>
            <input placeholder='Price'/>
            <input placeholder='Image'/>

            <button>Create</button>
        </form>
    )
}

export default CreateCarForm