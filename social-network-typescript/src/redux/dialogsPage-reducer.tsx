import React from 'react';
import { useStore } from 'react-redux';
import { useParams } from 'react-router';
import { v1 } from 'uuid';
import { ActionsType, DialogsPageType } from '../types/types';
// import { DialogsPageType } from './state';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const SET_USER_ID_FOR_MESSAGE = 'SET-USER-ID-FOR-MESSAGE'
// const GET_MESSAGES = 'GET-MESSAGES'

// Initial state for Dialog Page
let initialState = {
    users: [
      {
        id: v1(),
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
        firstName: 'Ken',
        lastName: 'Olegov',
        messages: [
          { id: v1(), messageText: 'First message for user Ken' },
          { id: v1(), messageText: 'Second message for user Ken' },
          { id: v1(), messageText: 'Third message for user Ken' },
        ],
      },
      {
        id: v1(),
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
        firstName: 'Oleg',
        lastName: 'Tulin',
        messages: [
          { id: v1(), messageText: 'First message for user Oleg' },
          { id: v1(), messageText: 'Second message for user Oleg' },
          { id: v1(), messageText: 'Third message for user Oleg' },
        ],
      },
      {
        id: v1(),
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSXz1HMREReqw-P0iHJZOA7mpnfPrSC_DdM2ruiFtlNvY_5K043wIzPcjow1UyTcfqU4&usqp=CAU',
        firstName: 'Kirill',
        lastName: 'Goncharov',
        messages: [
          { id: v1(), messageText: 'First message for user Kirill' },
          { id: v1(), messageText: 'Second message for user Kirill' },
          { id: v1(), messageText: 'Third message for user Kirill' },
        ],
      },
    ],
    newMessageText: '',
    userId: ''
  }

// state: DialogsPageType = initialState 
// If state not provided we gonna use  initial value initialState

const dialogPageReducer = (state: DialogsPageType = initialState, action: ActionsType):  DialogsPageType => {
    
    
    switch(action.type){

        
            

        case SEND_MESSAGE: {
          
          const stateCopy = {...state, users: [...state.users]}

          const messageToSend = action.newMessage
          
          const userIdSendTo = action.sendToUserId
          
          let user = stateCopy.users.find( u => u.id === userIdSendTo)
          if(user) {
            user.messages?.push({id: v1(), messageText: messageToSend})
          } else {
          console.log("User ID not found")
          }
          // Add new Message to dialog for particular user.
          stateCopy.newMessageText = ''
          
          return stateCopy

        }
            
        
        case SET_USER_ID_FOR_MESSAGE: {
          
          const stateCopy = {...state}
          
          stateCopy.userId = action.userId
            
          return stateCopy
        }
            
        // In all other cases return state
        default:
            return state 
    }
}
//
// Action Creators Start
//

  export const sendMessageActionTypeAC = (sendToUserId : string, newMessage: string) => {
    
    return {
      type: SEND_MESSAGE,
      sendToUserId: sendToUserId,
      newMessage: newMessage
    } as const
  }
  export const setUserIdForMessageAC = (userId : string) => {
    return {
      type: SET_USER_ID_FOR_MESSAGE,
      userId: userId
    } as const
  }
//
// Action Creators End
//


export default dialogPageReducer;