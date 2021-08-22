
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <p className="navbar-brand font-weight-bold" href="#">Crypto</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
                    <p className="text-justify text-white text-lg-left font-weight-bold mt-1">BYT</p>
                    <p className="text-justify text-white text-lg-left font-weight-bold mt-1">ETH</p>
                    <p className="text-justify text-white text-lg-left font-weight-bold mt-1">DOG</p>
                </div>
                <button type="button" className="btn btn-primary btn-lg">Purse</button>
            </nav>
        </>
    )
}

export default Header;