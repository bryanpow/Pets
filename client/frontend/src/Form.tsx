import React from 'react'

export function Form() {
  return (
    <>

    <form  style={{display: 'flex', flexDirection: 'column', gap:'20px', width: '300px'}}>
        <h1 >Add a new Pet!</h1>
        <div>
            <label htmlFor='name' className='pl-10'>Pet Name<span className='sup'>*</span> </label>
            <input name='name' id='name' required></input>
        </div>
        <div>
            <label htmlFor='pic' >Profile Picture<span className='sup'>*</span> </label>
            <input name='pic' id='pic' placeholder='Picture URL' required></input>
        </div>
        <div style={{border: '1px solid gray', paddingLeft: '10px', paddingBottom: '10px'}}>
            <p>Species<span className='sup'>*</span></p>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>
                <input type='radio' name='species' value='cat' required />Cat
                </label>
                
                <label>
                <input type='radio' name='species' value='dog' required />Dog
                </label>
                
                <label>
                <input type='radio' name='species' value='bird' required />Bird
                 </label>
            </div>
 
        </div>
        <div>
                <label htmlFor='friend'>Are They Friendly?</label>
                <input type='checkbox' name='friend' id='friend' />
        </div>
        <button>Add Pet!</button>
    </form>
    </>

  )
}

