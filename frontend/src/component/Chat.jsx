// import React from 'react'
import { useEffect, useState ,useRef} from 'react'
import '../css section/Chat.css'
import io from 'socket.io-client'
import Axios from 'axios'
import { useAuth } from './Auth'


let socket;
function Chat(){
  const auth = useAuth()
  const[sender]=useState(true)
  const [username, setusername] = useState(auth.username);
  const[message,setmessage] = useState('');
  const[list,setlist] = useState([]);
  const messageEndRef = useRef(null);

  const backendUrl = 'http://localhost:7000';



  useEffect(()=>{
    socket = io(backendUrl)
   
    //receiving new message
    // socket.on('reciveMessage',(data)=>{
    //   setlist((prev)=>[...prev,data]);
    //    window.scrollTo(0,document.body.scrollHeight);
      
    // });

    // return ()=>{
    //   socket.off('reciveMessage')
    // };
    

    socket.on('loadMessages',(loadMessages)=>{
      setlist(loadMessages);
      window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on('receiveMessage',(msg)=>{
      setlist((prev)=>[...prev,msg]);
      window.scrollTo(0,document.body.scrollHeight);
    });

    return()=>{
      socket.off('loadMessages');
      socket.off('receiveMessage');
    }

  },[list])

  // auto scroll

  useEffect(()=>{
    if(messageEndRef.current){
      messageEndRef.current.focus()
    }
  },[list])



//   const allmessages = () => {
//     Axios.get('http://localhost:7000/message/get')
//       .then((res) => {setlist(res.data)})
//       .catch(err => console.log(err))

//   };

//  useEffect(()=>{
//   allmessages();
//  },[list]);


//scroll button 


  const  handlesend = async (e)=>{
     e.preventDefault();
      console.log(username)

     
     if (message.trim(),username.trim()) {
      try{
        socket.emit('sendMessage', { username,message, sender: true })

        const responce = await
          Axios.post(`http://localhost:7000/`, { username, sender, message })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.data))
        setmessage('');
      }catch(err){
        console.error("error", err.responce ? err.responce.data : err.message)
      }
      }
    else{
      console.log("username and message are required !")
    }

      
      // allmessages();
  }
  
  return (
    <div className='main-div'>
      <div className="side-bar">
        <div className="top-div">
          <button id='add-friends'>add friends</button>
          <button id='add-group'>add group</button>
          <input type="text" placeholder='Search contact / group'/>
          <button id='search-button'>search</button>
        </div>

        <div className="friends-div">
          <h3>Adam</h3>
          <h3>Group1</h3>
        </div>
      </div>

      <br />

      <div className="main-bar">
        
        <div className='name-div'>
          <p>Group1</p>
        </div>

        <div id="view-div">
           
            {list.map((msg, index)=>(
              <>
                <div key={index} id='view-div-child' className={msg.sender === true ? 'message sender' : 'message receiver'} ref={messageEndRef}>
                <li style={{fontWeight:"bold"}} id='nameli'>{msg.username}</li>
                <li>{msg.message}</li>
                <li>{msg.timestamp}</li>
              </div>
              </>
            ))}
           
        </div>

        <div id='msg-div'>
          <input type="text" id='text-box' placeholder='Start your happy chat' value={message} onChange={(e)=>{setmessage(e.target.value)}} required autoComplete='off'/>
          <button className='send-button' onClick={handlesend}>Send</button>
        </div>
      </div>
      
    </div>
  )
}

export default Chat



