import React from 'react'

export const required = (value: any) => {

    if (value) return undefined;

    return 'Field is required';
}

//function which returns another function
export const maxLengthCreator = (maxLength: number) => (value: string) => {

    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined;
}