import { Link } from 'react-router-dom'
import './chatList.css'
import { useQuery } from '@tanstack/react-query'

const ChatList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['chats'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
                credentials: "include",
            })
            return response.json()
            },
    })

  return (
      <div className='chatList'>
          <span className="title">DASHBOARD</span>
          <Link to="/dashboard">Create a new Chat</Link>
          <Link to="">Explore MERN AI</Link>
          <Link to="">Contact</Link>
          <hr />

          <span className="title">RECENT CHATS</span>
          <div className="list">
              {isPending ? "Loading" : error ? "Something went wrong" : data?.map(chat => (
                  <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>{chat.title}</Link>
              ))}
          </div>
          <hr />
          <div className="upgrade">
              <img src="/logo.png" alt="" />
              <div className="texts">
                  <span>Upgrade to MERN AI Pro</span>
                  <span>Get unlimited access to all features</span>
              </div>
          </div>
    </div>
  )
}

export default ChatList