import "./about.css"

import { Link } from 'react-router-dom'

const About = () => {
    return (
        <><div className="title">
            <p>
                <Link className="home" to="/">🏠home</Link>
            </p>
            <h1 className="title-txt">
                about me
            </h1>
        </div>
        <div className="a">
            <div className="a-left">
                <h2 className="a-header">quick facts</h2>
                <ul className="points">
                    <li>i am a <strong>21 year old male</strong> from <strong>Tennessee</strong></li>
                    <li>
                        i am currently a <strong>computer science major</strong>,
                        as well as a <strong>mathematics minor</strong>
                    </li>
                    <li>my favorite artist is <strong>porter robinson</strong></li>
                    <li>my favorite game is <strong>mario kart wii</strong></li>
                    <li>my favorite show is <strong>avatar: the last airbender</strong></li>
                    <li>
                        my favorite overwatch league team is the <strong>philadelphia
                        fusion</strong> #FusionFighting
                    </li>
                    <li>
                        my favorite book is <strong>cloud cuckoo land</strong> by anthony
                        doerr
                    </li>
                    <li> my favorite podcast is the <strong>lex fridman podcast</strong></li>
                    <li>i <strong>won a golf tournament</strong> when i was <strong>11 years old</strong></li>
                    <li>ten years later, i worked <strong>my first summer job at a golf course</strong></li>
                </ul>
            </div>
            <div className="a-middle">
                <h2 className="a-header">hobbies</h2>
                <ul className="points">
                    <li>
                        <strong>super monkey ball individual levels:</strong> i have been competing in super
                        monkey ball for almost a decade. to see some of my records, please visit
                        my youtube channel on the home page. i also stream monkey ball on my twitch channel!
                    </li>
                    <li>
                        <strong>competitive video games:</strong> i enjoy watching video games being
                        played at the highest level. this includes watching speedrunners, as well as
                        esports. most notably, the overwatch league.
                    </li>
                    <li>
                        <strong>programming:</strong> creating my own web apps is something i am excited about.
                        this website itself is a perfect example of this!
                    </li>
                    <li>
                        <strong>bike rides:</strong> although this one is not as serious, riding my bike
                        is one of my favorite ways to excercise, as well as destress.
                    </li>
                </ul>
            </div>
            <div className="a-right">
                <h2 className="a-header">interests</h2>
                <ul className="points">
                    <li>
                        generally speaking, i enjoy almost all things <strong>mathematics. </strong>
                        for many years, it has been my favorite subject.
                    </li>
                    <li>
                        i enjoy the study of the universe, also known as <strong>astronomy. </strong>
                        shoutouts to the youtube
                        channel <a className="txt-link" href="https://www.youtube.com/c/CoolWorldsLab" target="_blank" rel="noreferrer">Cool Worlds</a> for
                        reintroducing me to this subject!
                    </li>
                    <li>
                        <strong>geography</strong> has always been fascinating to me. comparing the ways people live
                        in other countries compared to mine is highly interesting.
                    </li>
                    <li>
                        a technology i have become quite interested in over the past year is cryptocurrencies.
                        in particular, i am interested in the <strong>ethereum</strong> ecosystem.
                    </li>
                </ul>
            </div>
        </div></>
    );
}

export default About