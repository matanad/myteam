import bgBoostDesktop from '../assets/img/bg/bg-boost-desktop.svg'

export function Hero() {

    return <header className="hero main-layout full flex">
        <div className='bg-boost-desktop'></div>
        <div className='container flex'>
            <section className="title">
                <h1 className="large">
                    Find the best <span className="primary-400">talent</span>
                </h1>
            </section>
            <section className="hero-paragraph-container">
                <hr />
                Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
            </section>
            <div className='bg-boost-desktop-bottom'></div>
        </div>
    </header>
}