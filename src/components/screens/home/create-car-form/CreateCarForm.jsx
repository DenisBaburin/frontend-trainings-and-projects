import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
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