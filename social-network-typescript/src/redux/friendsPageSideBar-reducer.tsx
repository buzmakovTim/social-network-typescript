import React from 'react';
import { v1 } from 'uuid';
import { ActionsType, UserType } from '../types/types';

let initialState = [
    {
      id: v1(),
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
      firstName: 'Ken',
      lastName: 'Olegovich',
    },
    {
      id: v1(),
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
      firstName: 'Oleg',
      lastName: 'Tulin',
    },
    {
      id: v1(),
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
      firstName: 'Kirill',
      lastName: 'Kirillov',
    },
  ]

const friendsPageSideBarReducer = (state: UserType[] = initialState, action: ActionsType): UserType[] => {


    return state
}

export default friendsPageSideBarReducer;
