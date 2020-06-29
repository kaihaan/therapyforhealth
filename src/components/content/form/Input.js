import React, { useState } from 'react'

//CSS
import classes from './css/Input.module.css'


const Input = ({ type, label, props, validation, options, updateState }) => {

    // console.log(type, label, props, validation, options)

    // field state & error checking
    const [getFieldState, setFieldState] = useState({
        fieldVal: '',
        isErr: false,
        errMessage: ''
    })

    const Error = (props) => {
        return <div className={classes.Error}>{props.children}</div>
    }

    const makeSelect = (props, options, label, errorElement, inputClasses) => {
        let key = 0, jsxOptions = []
        options.map(option => {
            jsxOptions.push(<option key={key}>{option}</option>)
            return key++
        })
        if (errorElement) {
            inputClasses.unshift(classes.Select)
        } else {
            inputClasses = classes.Select
        }
        return (
            <>
                <label className={classes.Label} htmlFor={props.name}>{label}</label>
                <select {...props} className={classes.Select} onBlur={blurHandler}>
                    {jsxOptions})
                </select>
                {errorElement}
            </>)
    }



    const blurHandler = (event) => {

        // console.log(event.target.value)

        let errMessage = ''
        let isErr = false

        validation.forEach((v) => {

            let key = Object.keys(v)[0]
            let value = Object.values(v)[0]

            switch (key) {
                case ('maxlen'):
                    if (event.target.value.length > value) {
                        isErr = true
                        errMessage = "Max length " + value + " characters"
                    }
                    break
                case ('minlen'):
                    if (event.target.value.length < value) {
                        isErr = true
                        errMessage = "Min length " + value + " characters"
                    }
                    break
                case ('mustagree'):
                    console.log('Checkbox val ', event.target.checked)
                    if (event.target.checked === false) {
                        isErr = true
                        errMessage = "Must agree"
                    }
                    break
                case ('email'):
                    // eslint-disable-next-line
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(event.target.value).toLowerCase())
                    if (!re.test(String(event.target.value).toLowerCase())) {
                        isErr = true
                        errMessage = "You have entered an invalid email address!"
                    }
                    break
                default:
                    isErr = false
            }

        })

        setFieldState({
            fieldVal: event.target.value,
            isErr: isErr,
            errMessage: errMessage
        })

        updateState({ [props.name]: { value: event.target.value, isErr: isErr } })

        console.log('onBlur ', event.target.value, errMessage)
    }



    let inputElement = null
    let errorElement = null
    let inputClasses = []

    if (getFieldState.isErr) {
        inputClasses.push(classes.FieldError)
        errorElement = <Error>{getFieldState.errMessage}</Error>
    }

    switch (type) {
        case ('text'):
            inputClasses.unshift(classes.Text)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="text" {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('textarea'):
            inputClasses.unshift(classes.TextArea)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <textarea className={inputClasses.join(' ')}  {...props} onChange={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('checkbox'):
            inputElement = (<>
                <div className={classes.CheckBoxDiv}>
                    <input className={inputClasses.join(' ')} type="checkbox" {...props} onChange={blurHandler} />
                    <label className={classes.CheckBoxLabel} htmlFor={props.name} onChange={blurHandler}>{label}</label>
                </div>
                {errorElement}</>)
            break
        case ('email'):
            inputClasses.unshift(classes.Text)
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name}>{label}</label>
                    <input className={inputClasses.join(' ')} type="email" {...props} onBlur={blurHandler} />
                    {errorElement}
                </>)
            break
        case ('select'):
            inputElement = makeSelect(props, options, label, errorElement, inputClasses)
            break
        default:
            inputElement = (
                <>
                    <label className={classes.Label} htmlFor={props.name} onChange={blurHandler} >{label}</label>
                    <input className={inputClasses.join(' ')} {...props} />
                    {errorElement}
                </>)
    }


    return (
        <div className={classes.InputDiv} >
            {inputElement}
        </div>
    )
}

export default Input