import React from 'react'


const contact = () => {
  return (
    <>
    <div className='contact_container'>
        <div className='contact'>
            <h2>contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name="Name" value="" placeholder='Enter Your  Name' required></input>
                    <input type='email' name="E-mail" value="" placeholder='Enter Your E-mail ' required></input>
                    <input type='text' name="Subject" value="" placeholder='Enter Your Subject' required></input>
                    <textarea name='Message'value="" placeholder='your msg'  autoCorrect=''required></textarea>
                    <button type='submit'>send</button>
                </form>

            </div>

        </div>
      
    </div>
    </>
  )
}

export default contact
