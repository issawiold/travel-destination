import "./Header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <h1>
            <nav>
                <a>
                    Popular Locations
                </a>
                <a>
                    Beaches
                </a>
                <a>
                    Mounts
                </a>
                <Link>
                Home
                </Link>
                
            </nav>
        </h1>
    )
}
export default Header