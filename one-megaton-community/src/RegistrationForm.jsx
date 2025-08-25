import './RegistrationForm.css';

function RegistrationForm(){

    return (
<form action="">
        <div className='main-heading'>Register Today</div>
        <p>kicking off in Chicago and Illinois</p>
        <div className="form-elements">
                <input 
                type="text" 
                id="first_name" 
                name="first_name" 
                placeholder="Your first name" required />
                <input 
                type="text" 
                id="last_name" 
                name="last_name" 
                placeholder="Your last name" required />
                <input 
                type="email" 
                id="email" 
                name="user_email" 
                placeholder="Your email address" required />
                <input 
                type="text" 
                id="zip_code" 
                name="zip_code" 
                placeholder="ZIP code" required />
            <button type="submit">JOIN THE WAITLIST</button>
            <p className='note-better'>We respect your privacy. Unsubscribe at any time.</p>
        </div>
    </form>
    )
    
}
export default RegistrationForm;