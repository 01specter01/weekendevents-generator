import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HomePage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
