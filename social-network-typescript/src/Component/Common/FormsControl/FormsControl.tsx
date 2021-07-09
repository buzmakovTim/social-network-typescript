import React from 'react';
import style from './FormsControl.module.css';
 
//@ts-ignore
const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}> 
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const TextArea = (props: any) => {
    const {input, meta, ...resProps} = props;
    return <FormControl {...props}><textarea {...input} {...resProps}></textarea></FormControl>
}
export const Input = (props: any) => {
    const {input, meta, ...resProps} = props;
    return <FormControl {...props}><input {...input} {...resProps}></input></FormControl>
}

// TextArea
// Inpit


