import "./projects.css"

import Sheet from "../../img/sheet.png"
import Standards from "../../img/standards.png"

import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <><div className="p-title">
            <p>
                <Link className="home" to="/">🏠home</Link>
            </p>
            <h1 className="p-title-txt">
                my projects
            </h1>
        </div>
        <div className="p">
            <p className="p-info">
                below are some projects i have worked on, as well as projects that i wish to
                work on in the future
            </p>
            <div className="p-split">
                <div className="p-left">
                    <h3 className="p-sec-title">completed projects</h3>
                    <p className="p-sec-desc">
                        in march 2022, i released 
                        the <a
                            className="p-link"
                            href="https://docs.google.com/spreadsheets/d/1UJ4UDM5np2aXkhZitFI276WznqNOun-6MHppJTpaKLA/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >super monkey ball live il spreadsheet</a>, a google sheets page in which
                        users can submit their best score and time ils, with a rule that <strong>
                        any submission must have a live recording.</strong> using protected ranges,
                        the sheet is designed such that <strong>users are only able to edit cells that
                        'belong to them',</strong> which is any row with their name in the left-most cell.
                        the exception to this are moderators, who have access to all cells on the
                        sheet. for each sheet (which corresponds to a game and il type), <strong>each player
                        has a point value and medals count</strong> (gold, silver, and bronze) assigned to them. 
                        <strong> as users submit more pbs, the number of points they recieve increases </strong> 
                        (they get more points for better submissions), and they can climb the ranks, as the ordering of
                        players is determined by number of points. (note: the sheet does not automatically
                        do ordering. this is done by moderators. however, the sheet will let the moderators know
                        when a row needs to be moved.) <strong>gold, silver, and bronze medals</strong> are awarded
                        when users submit a <strong>first place, second place, and third place</strong> score/time 
                        respectively. here is what the sheet will typically look like:
                    </p>
                    <img src={Sheet} alt="" className="sheet-img"></img>
                    <p className="p-sec-desc">
                        i am fairly happy with how the sheet turned out, but it isn't perfect. here are some
                        issues i have with it:
                    </p>
                    <ol className="p-list">
                        <li>
                            <strong>i don't even fully understand how it works.</strong> this is because most of the scripting work
                            was done by shout, who made these scripts for the super mario sunshine community. i basically took a clone
                            of the original sheet, created boards for each game, reimplemented some features that did not
                            transfer over, and tested for bugs. the original code can be found <a 
                                className="p-link"
                                href="https://github.com/pyorot/il-scripts"
                                target="_blank"
                                rel="noreferrer">here.</a> thus, if something goes horribly wrong, it will likely be
                                quite difficult for me to fix it. [huge, huge shoutouts to shout, for all the help he
                                provided along the way.]
                        </li>
                        <li>
                            <strong>users are able to make severely disruptive changes to the boards.</strong> i am not going to discuss
                            how this is possibly exactly, as i do not want people to abuse any exploits. thankfully,
                            if anyone were to figure out how to mess with the sheet, the moderators are able to revert
                            all changes fairly easily. however, the fact that the sheet is secured through obscurity is
                            something i am not a huge fan of.
                        </li>
                        <li>
                            <strong>formatting bugs are common.</strong> the sheet is supposed to apply formatting to submissions
                            based on position relative to other submissions, as well as if the submission included a proof or not.
                            however, this does not always work, meaning a moderator will be forced to manually fix these errors.
                        </li>
                        <li>
                            <strong>adoption has not been stellar.</strong> unfortunately, people have not been using the sheet
                            as much as i hoped they would. there are a few reasons i believe this is the case:
                        </li>
                        <ol type="a">
                            <li>some people do not wish to give their email information to me in order to join the board.</li>
                            <li>
                                missing features, such as score totals, which are impossible to implement due to how
                                the data is represented on the sheet.
                            </li>
                            <li>
                                the burden of filling the boards falls on the user. this is something i could help alleviate
                                by submitting on behalf of people, which i may end up doing in the future.
                            </li>
                            <li>the sheet can feel overwhelming. not only is it a unique system, but it also feels a bit bloated.</li>
                        </ol>
                    </ol>
                    <p className="p-sec-desc">
                        for the reason listed above, i am not totally content with this sheet. thus, i like to think of the sheet
                        as a temporary solution to a problem the monkey ball il community has had for years: the lack of a good
                        leaderboad. thus, the future project i wish to work on will hopefully be a solution to this problem.
                    </p>
                </div>
                <div className="p-right">
                    <h3 className="p-sec-title">future projects</h3>
                    <p className="p-sec-desc">
                        over summer break 2022, i am hoping to start working on, and potentially complete, a super monkey ball il
                        leaderboard website. at the current moment, the monkey ball community has three different leaderboards for
                        ils, all of which serve different purposes.
                    </p>
                    <ol className="p-list">
                        <li>
                            <strong><a href="https://cyberscore.me.uk/" target="_blank" rel="noreferrer" className="p-link">cyberscore:</a></strong> the
                            primary super monkey ball il board for well over a decade at this point. cyberscore is probably the most 
                            'complete' board we have at the moment. however, it is not perfect. firstly, the moderators of cyberscore are not
                            connected to the monkey ball community at all, meaning they can add/remove new boards at will, are able to approve of proofs
                            that are invalid due to lack of knowledge (which makes those records unable to be reported), and generally speaking, the community
                            has very little power over how the boards are run. also, many new runners do not use cyberscore at all, making the boards incomplete.
                            finally, <strong>live recordings are not a requirement!</strong>
                        </li>
                        <li>
                            <strong><a
                                href="https://docs.google.com/spreadsheets/d/1UJ4UDM5np2aXkhZitFI276WznqNOun-6MHppJTpaKLA/edit?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="p-link"
                            >smb live il sheet:</a></strong> you can learn more about this by reading the 'completed projects' section
                            of this page, but tl;dr: better than cyberscore in someways, worse in others. also suffers from a lack of
                            widespread adoption.
                        </li>
                        <li>
                            <strong><a
                                href="https://docs.google.com/spreadsheets/d/1KoneeqJzheHFYapQ_JfyxL9sI0X8_BE7ZEVMZt0t0bI/edit?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="p-link"
                            >smb record sheet:</a></strong> this sheet is not really a 'leaderboard,' but is more of a resource.
                            this sheet is where you can find the world records for all ils. however, for some new players, before the
                            live il sheet was completed, this served as the only 'leaderboard'.
                        </li>
                    </ol>
                    <p className="p-sec-desc">
                        as you can tell, all of these boards serve different purposes, but they are all related. in fact, i would argue that
                        the creation of a website similar to cyberscore, but with stronger proof requirements, as well as control from the smb
                        commuity, would be able to do everything the other boards can do, but in one central location. thus, adoption for this
                        website will be a no-brainer, as it will be the most convinent, and best, option. here is a list of features i believe
                        this website must have at a bare minimum in order for it to be successful:
                    </p>
                    <ul className="p-list">
                        <li>
                            the website must support <strong>super monkey ball 1, super monkey ball 2, </strong> and <strong>super monkey
                            ball deluxe</strong></li>
                        <li>
                            <strong>all traditional categories</strong> (highest score & fastest time; challenge mode + story mode world 10 for smb2
                            and deluxe) <strong>must be present.</strong>
                        </li>
                        <li>
                            <strong>each game must have it's own player leaderboard</strong> that ranks players based on the collection of all their submissions on each
                            level, in a somewhat similar way to cyberscore. this can potentially be more advanced than the cyberscore calculation.
                        </li>
                        <li>
                            <strong>the website must have a clean ui,</strong> such that users can easily swap between games, game leaderboards, and individual
                            level leaderboards.
                        </li>
                        <li>
                            <strong>users must be able to create an account, so they can submit through the website.</strong> this will likely be the
                            most challenging feature to implement. <i>a temporary solution will be to accept submissions through the smb elite discord,
                            but this will make the website less accessible.</i> also, some selected users must be able to have moderation powers, so any
                            bad submissions can be removed.
                        </li>
                        <li>
                            <strong>pbs that have no live replay should still be acknowledged in someway,</strong> even if they do not count toward the
                            game leaderboard. this will make the website more attractive to older players especially.
                        </li>
                    </ul>
                    <p className="p-sec-desc">
                        i think if i manage to create a website with all of these features, it can be a success, and i will be fairly satisfied. at the same
                        time, if i do manage to make this website, it has the potential to be more than just a 'better cyberscore.' i have some more ideas
                        that could be added to an second iteration of the website:
                    </p>
                    <ul className="p-list">
                        <li>
                            <strong>standards:</strong> this is an idea i got from the mario kart wii player's page, although it seems to be present in every
                            mario kart player's page. you can find an example of this <a
                                href="https://www.mariokart64.com/mkw/standardc.php"
                                target="_blank"
                                rel="noreferrer"
                                className="p-link"> here</a>. 
                                <img src={Standards} alt="" className="sheet-img-2"></img>
                                basically, the idea is to come up with scores/times for each level that represent a skill level.
                                for example, take a level like Simple, and suppose we have the following standards: <i>Amateur, Pro, Legendary,</i> and <i>Godlike.</i> now,
                                suppose Simple has the following time standards: <strong>Amateur: 53.96, Pro, 54.06: Legendary: 54.10, Godlike: 54.13.</strong> if a player ties
                                or beats a standardized time, they can say they have a time equal to that standard. for example, if someone gets a <strong>53.98 on Simple</strong>,
                                they can say they have an <strong>Amateur Simple time.</strong> suppose another player gets a <strong>54.10 simple.</strong> they can say they have
                                a <strong>Legendary Simple time.</strong>
                        </li>
                        <li>
                            <strong>custom level support:</strong> i think it would be really neat to have support for selected custom packs, as they have become quite
                            popular to il over the past couple of years especially. if i create this website in a modular way, this should be fairly easy.
                        </li>
                        <li>
                            <strong>rta support:</strong> eventually, this website could become a website for all types of monkey ball speedruns, rtas included. however,
                            rta players already have <a
                                href="https://www.speedrun.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-link">speedrun.com</a>, so the focus is on ils for now.
                        </li>
                        <li>
                            <strong>links to the smb wiki:</strong> the super monkey ball wiki has pages dedicated to each individual level in all of the main super monkey ball games.
                            on each level on the website, there could be a link to that level's respective smb wiki page.
                        </li>
                    </ul>
                    <p className="p-sec-desc">
                        <i>this website is still in the planning stages, and i am open to any suggestions on how to make the website better. please feel free to contact me, links on the
                        home page!</i>
                    </p>
                </div>
            </div>
        </div></>
    );
}

export default Projects