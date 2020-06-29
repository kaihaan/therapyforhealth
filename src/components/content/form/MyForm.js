import React, { Component } from 'react'
import classes from './css/MyForm.module.css' 
import emailjs from 'emailjs-com'
import { SECRETS } from '../../../secrets/secrets' 

import Input from './Input'
import Button from './Button'

const REQUIRED = true
//const NOT_REQUIRED = false

export default class Form extends Component {

    state = {
        firstname: {value: '', isErr: false},
        lastname: {value: '', isErr: false},
        email: {value: '', isErr: false},
        message: {value: '', isErr: false}
    }

    formBuilder = (event) => {

        const updateState = (state) => {
            // console.log('Update form state ', state)
            this.setState(state)
        }

        const inputs = [{
            type: 'text',
            label: 'First Name',
            props: {
                name: 'firstname',
                placeholder: 'Your first name',
                required: REQUIRED,
            },
            validation: [
                { maxlen: 15 }
            ],
            options: []
        },
        {
            type: 'text',
            label: 'Last Name',
            props: {
                name: 'lastname',
                placeholder: 'Your first name',
                required: REQUIRED,
            },
            validation: [
                { maxlen: 15 },
            ],
            options: []
        },
        {
            type: 'email',
            label: 'Email',
            props: {
                name: 'email',
                placeholder: 'Your email',
                required: REQUIRED,
            },
            validation: [{email: true}],
            options: []

        },
        {
            type: 'textarea',
            label: 'Message',
            props: {
                name: 'message',
                placeholder: 'Let me know how I can help...',
                required: REQUIRED,
            },
            validation: [{maxlen: 120}],
            options: []

        },
      
    ]

        return inputs.map(inputField => (
            <Input  {...inputField} key={inputField.props.name} updateState={updateState}/>
        ))

    }



    render = () => {
        // console.log(this.formBuilder())
        

        const formHandler = (event) => {
            // prevent page reload etc..
            event.preventDefault()

            // data needed already in state
            // console.log('formHandler:', this.state)

            // TODO
            // could add a forced check on all
            // add check on required
            // ping alert with
            // can add 'formIsValid' which only pops once all are :-)

            let formData = {}
            for(let [key,value] of Object.entries(this.state)) {
                //console.log('state element - ', value.value)

                if(value.isErr) {
                    return alert("Form contains errors")
                }
                formData[key] = value.value
            }

            console.log('email ID - ' + process.env.EMAILJS.USERID)
            // execute form submission!
            //console.log("Submitted!")
            emailjs.sendForm(
                'kaihaan@gmail.com',
                'template_4BTOCbkt_clone', 
                event.target, 
                process.env.GATSBY_CLOUD ? process.env.EMAILJS.USERID : SECRETS.emailjs.userid
            )
            console.log(event.target)
            alert("Thankyou.  I will get back to you as soon as possible.")
        }

        return (
            <>
                <form className={classes.Form} onSubmit={formHandler}>
                    {this.formBuilder()}
                    <Button type="submit">Submit</Button>
                </form>
            </>
        )

    }
}