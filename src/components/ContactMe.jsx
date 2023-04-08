import React, { useEffect } from 'react'
import FormDataExport from './FormData.js';
import '../css/ContactMe.css'


export default function ContactMe() {
  useEffect(()=>{
    let formElement = document.querySelector('.ContactMe');
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('useEffect is being rendered for contact me page')

      let NameElement = document.getElementById('Name')
      let EmailElement = document.getElementById('Email')
      let SubjectElement = document.getElementById('Subject')
      let MessageElement = document.getElementById('Message')
  
      let FormData = {
        name: NameElement.value,
        Email: EmailElement.value,
        Subject: SubjectElement.value,
        Message: MessageElement.value
      }

      let FormDataInfo = JSON.stringify(FormData)
      FormDataExport.FormDataExport = FormDataInfo

      console.log(FormDataExport)
      //clear form after submit
      NameElement.value = '';
      EmailElement.value = '';
      SubjectElement.value = '';
      MessageElement.value = '';

    })

  }, [])

  return (
    <>
    <div className="ContactMe">
        <div className="ContactContainer">
            <h1 className='ContactMeTitle'>CONTACT ME</h1>
            <form className="ContactMe">
                <input className='FormElement' type="text" id='Name' placeholder='Your Name'/>
                <input className='FormElement' type="email" id='Email' placeholder='Email' />
                <input className='FormElement' type="text" id='Subject' placeholder='Subject'/>
                <textarea className='FormElement' id="Message" cols="30" rows="10" placeholder='Message'></textarea>
                <input type="submit" className='Submit' value='SUBMIT' />
            </form>
        </div>
    </div>
    </>
  )
}