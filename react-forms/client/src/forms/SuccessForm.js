import "./SuccessForm.css"
import { useNavigate,useLocation  } from 'react-router-dom';
const SuccessForm = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data;
    const handleClick = (e) => {
        navigate('/')
    }
    return (
        <div className="success-container">
            <div className="content-container">
                <svg className="icon-check" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth={2} d="M6 11.381 8.735 14 15 8"/></g></svg>
                <h1 className="success-greetings">Thanks for subscribing!</h1>
                <p className="confirmation-btn">A confirmation email has been sent to <b>{data}</b>. Please open it and click the button inside to confirm your subscription.</p>
                <button className="dismiss-btn" onClick={handleClick}>Dismiss message</button>
            </div>
            
        </div>
    )
}
export default SuccessForm;