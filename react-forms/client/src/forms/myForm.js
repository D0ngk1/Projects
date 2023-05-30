import { Fragment,useState,  } from 'react';
import { validEmail } from './../Regex.js';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  let data;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email address
    if (!validEmail.test(email)) {
      setError('Valid email required');
    }else{
        //e.preventDefault();
         data= email;
        navigate("/success",{ state: { data } });
    }

  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };
    return (
        <>
        <div className='form-container' onSubmit={handleSubmit}>
            <div className='form-left'>
                    <div className='check-container'>
                        <h1 className='heading'>Stay updated!</h1>
                        <p className='check'>Join 60,000 product managers receiving monthly updates on:</p>
                        <div className='check'>
                            <div className='wrapper-icon'>
                                <svg className='icon-check'  xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                                    <g fill="none">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                                    <path strokeWidth={2} stroke="#FFF" d="M6 11.381 8.735 14 15 8" />
                                    </g>
                                </svg>
                            </div>
                            
                            <div className='wrapper'><p>Product discovery and building what matters</p></div>
                        </div>
                        <div className='check'>
                            <div className='wrapper-icon'>
                                <svg className='icon-check' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                                    <g fill="none">
                                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                                    <path strokeWidth={2} stroke="#FFF" d="M6 11.381 8.735 14 15 8" />
                                    </g>
                                </svg>
                            </div>
                            <div className='wrapper'><p>Measuring to ensure updates are a succes</p></div>
                        </div>
                        <div className='check'>
                            <div className='wrapper-icon'>
                                <svg className='icon-check'  xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                                <g fill="none">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                                <path strokeWidth={2} stroke="#FFF" d="M6 11.381 8.735 14 15 8" />
                                </g>
                                </svg> 
                            </div>
                            <div className='wrapper'><p>And much more!</p></div>
                        </div>
                     <form>
                        <div className='label-container'>
                            <label className="email-text">Email address</label>
                            {error && <p className="error">{error}</p>}
                        </div>
                        <input className={`email-input ${error==='Valid email required' ? "error-input-box" : ""}`} type='text' placeholder='email@company.com' onChange={handleChange}></input>
                        <input className='submit-btn' type="submit" value="Subscribe to monthly newsletter" />
                    </form>
                    </div>
                        
                    
            </div>
            <div className='form-right'>
                <div className='right-container'>
                </div>
            </div>
        </div>

        </>
    )
}
export default Form;
//export { submittedEmail as email };