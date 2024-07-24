import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <h1>MERN AI</h1>
        <h2>Engage, Connect, Inspire: AI-Driven Conversations</h2>
        <h3>Welcome to your AI chat companion! Engage in insightful and friendly conversations tailored just for you. Whether you're exploring ideas or seeking answers, our app offers personalized and thoughtful responses, making every interaction meaningful.</h3>

        <button>Get Started</button>
      </div>

      <div className="right"></div>
    </div>
  )
}

export default HomePage