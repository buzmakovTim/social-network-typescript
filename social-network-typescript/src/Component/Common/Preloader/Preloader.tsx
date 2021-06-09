import React from 'react'
import preloader from '../../../images/preloader.gif'
import style from './Preloader.module.css'

export let Preloader = () => {

    return (
        <div className={style.preloaderContainer}>
            <img src={preloader}/>
        </div>
    )
}
