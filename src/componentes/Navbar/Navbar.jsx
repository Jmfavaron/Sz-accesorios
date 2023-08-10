import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            {}
            <a href="#" className="navbar-brand">Sz Accesorios</a>
            {}
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Pulseras</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Holders</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Collares</a>
                </li>
            </ul>
            {}
            <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;