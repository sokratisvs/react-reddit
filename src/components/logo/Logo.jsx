import logoSvg from '../../logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className="logo">
        <img src={logoSvg} alt="logo-reddit" />
        ReactReddit
    </div>
  )
}
