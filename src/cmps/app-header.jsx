import logo from '../assets/img/logo.svg'

export function AppHeader() {

    return <header className="app-header main-layout full">
        <section className=' flex align-center align-center'>

            <img className='logo' src={logo} alt="logo" />
            <nav className="main-nav">
                <ul className="flex align-center">
                    <li><a href="/">home</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </nav>
            <button className="btn-parimary">contact us</button>
        </section>
    </header>
}