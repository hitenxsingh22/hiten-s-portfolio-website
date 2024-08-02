import { Link } from "react-router-dom"
import LogoTitle from '../../assets/images/Hlogo.png'
import './index.scss';
import Logo from "./Logo";

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                Hiten.
                <br/>
                An Aspiring Software Engineer.
                </h1>
                <h2>Welcome To My Very Own Portfolio Website </h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home