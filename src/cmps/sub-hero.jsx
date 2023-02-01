import iconPerson from '../assets/img/icons/icon-person.svg'
import iconCog from '../assets/img/icons/icon-cog.svg'
import iconChart from '../assets/img/icons/icon-chart.svg'

export function SubHero() {

    return <section className="sub hero main-layout full flex">
        <div className="container  flex justify-between">
            <section className="hero-paragraph-container">
                <hr />
                <h2 >
                    Build & manage distributed teams like no one else.
                </h2>
            </section>
            <section>
                <ul>
                    <li>
                        <img src={iconPerson} alt="" />
                        <article>
                            <h3 className="primary-400">Experienced Individuals</h3>
                            <span>Our network is made up of highly experienced professionals who are passionate about what they do.</span>
                        </article>
                    </li>
                    <li>
                        <img src={iconCog} alt="" />
                        <article>
                            <h3 className="primary-400">Easy to Implement</h3>
                            <span>Our processes have been refined over years of implementation meaning our teams always deliver.</span>
                        </article>
                    </li>
                    <li>
                        <img src={iconChart} alt="" />
                        <article>
                            <h3 className="primary-400">Enhanced Productivity</h3>
                            <span>Our customized platform with in-built analytics helps you manage your distributed teams.</span>
                        </article>
                    </li>
                </ul>
            </section>
        </div>
    </section>
}