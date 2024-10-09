import React, {formRef} from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className='title'>
        <h1>Anonymous Confession </h1>
      </div>
      <form name='student-form'>
        <div>
          <textarea cols={60} rows={20}></textarea>
        </div>
        <div className='submit-buton'>
          <input type="submit" value="Confess" id="submit" />
        </div>
      </form>
    </>
    

  )
}

export default App