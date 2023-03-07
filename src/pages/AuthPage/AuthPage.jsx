import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
return (
    <main className="auth-page">
        <div className="image-container">
            <h2 className="slogan">Connecting and Creating Events for the Queer Community</h2>
            <img src="/cozy-corner.jpeg" alt="cozy-corner" className='logo' />
        </div>
        <div className="form-container">
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </div>
    </main>
);
}
