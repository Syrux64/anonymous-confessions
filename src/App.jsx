import React, {formRef} from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className='title'>
        <h1>Anonymous Confession </h1>
      </div>
      <form name='student-form'>
        <div className='input-area'>
          <textarea cols={25} rows={10}></textarea>
        </div>
        <div className='submit-buton'>
          <input type="submit" value="Confess" id="submit" />
        </div>
      </form>
    </>
    

  )
}

export default App