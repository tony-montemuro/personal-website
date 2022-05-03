import "./achievements.css"

import { Link } from 'react-router-dom'

const Achievements = () => {
    return (
        <><div className="v-title">
            <p>
                <Link className="home" to="/">🏠home</Link>
            </p>
            <h1 className="v-title-txt">
                gaming achievements: my top 4
            </h1>
        </div>
        <div className="v">
            <div className="v-vid">
            <iframe
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/t_DHMziQwI0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
            <div className="v-desc">
                <h2 className="v-desc-title">
                    number 4: E40 - 5000 (tied wr)
                </h2>
                <p className="v-desc-desc">
                    for any monkey ball player who really gets into ils, this is one of those ties that everyone
                    wishes to eventually get. ever since i started playing, i always envied those that could achieve
                    a 5000 on E40, as it just seemed like one of those ils where you need to have mastered the movement
                    in monkey ball. however, up until 2021, i was mostly a super monkey ball 2 player, so i never really
                    gave myself the opportunity to try E40. however, in 2021, i decided to attempt to il every single super monkey 
                    ball 1 level, including E40. however, i decided to save it for last, as i suspected that it would take a while.
                    eventually, i finished iling all the other levels, leaving me with just E40. because this was such a
                    special il, i kept track of two stats: my best score, as well as how much time i had put into attempts.
                    as you can see in the video, i played the level for 8 hours, 44 minutes, and 43 seconds before getting the
                    tie, and my best score i achieved before the 5000 was a 4800, which is a run with two missed bananas.
                    what makes my tie so special on this level is that i managed to skip 4900, which is pratically unheard of
                    on this level. also, taking less than ten hours to tie this record is also quite impressive, as many others who
                    have tied this record took far longer to achieve 5000. with this information, it definitely makes it sound
                    like my tie was a fluke. i don't like to think of it this way, despite the fact that it's probably true.
                    however, it's important to note that i got my first 4800 just over four hours into attempts, so at least
                    a 4900 was a long time coming.
                </p>
            </div>
            <div className="v-desc">
                <h2 className="v-desc-title">
                    number 3: overwatch - 3602 sr on support (masters rank)
                </h2>
            </div>
            <div className="v-vid">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1GRBPK9lsTc?start=408" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="v-vid">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/ZeC-Jn6Ky5s?start=408" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className="v-desc">
                <h2 className="v-desc-title">
                    number 2: Punched Seesaws - 33330 (wr)
                </h2>
                <p className="v-desc-desc">
                    of all my records in super monkey ball 2, this is definitely my favorite.
                    i have found quite a few new il strategies in super monkey ball 2, including Totalitarianism score strat,
                    Coin Slots score strat, Planets time strat, Earthquake score strat (which has since evolved from my initial 
                    discovery), etc. i am not the most skilled monkey ball player, so when i find a new strat, sometimes i am not even able
                    to pull it off, and if i can, usually others are able to replicate it, often beating me in the process. what makes
                    Punched Seesaws so special is that i found a new strategy on that level, executed it on March 15th, 2015, and as of 
                    May 3rd, 2022, nobody other than myself has performed this strategy, which has allowed me to hold onto this record for over
                    7 years. the discovery i made on this level is that it is possible to collect the second banana while still managing
                    to finish in the green goal with all the other bananas. previously on this level, people would grab all the bananas but the
                    second one, but i managed to figure out a way to grab it. even if someone eventually does pull off this strategy again, this pb will
                    always be special to me.
                </p>
            </div>
            <div className="v-desc">
                <h2 className="v-desc-title">
                    number 1: waluigi stadium (glitch) - 1:45.860
                </h2>
            </div>
            <div className="v-vid">
                <iframe
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/3Pfn1HvmVBw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div></>
    );
}

export default Achievements