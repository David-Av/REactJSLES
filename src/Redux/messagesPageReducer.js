const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"
export const updateNewMessageBodyActionCreator = (text) =>{
    return {type:UPDATE_NEW_MESSAGE_BODY,messageText:text}
  }
  export const sendMessageActionCreator = ()=>{
    return {type:SEND_MESSAGE}
  }
 const messagesPageReducer = (state,action)=>{
     switch(action.type){
         case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.messageText;
            return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody
        state.dialogsmessages.push({ id: 6, message: body })
        return state
        default:
             return state
     }
    // if(action.type === UPDATE_NEW_MESSAGE_BODY ){
    //     // state.newMessageBody = action.messageText;
    // }else if(action.type === SEND_MESSAGE){
    //     let body = state.newMessageBody
    //     state.dialogsmessages.push({ id: 6, message: body })
        
    //   }
    // return state
}

export default messagesPageReducer;