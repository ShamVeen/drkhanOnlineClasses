import stdStudy from "../images/girl-study.jpg";
import Heading from "./Heading";
export default function Different(){

    return(
        <div className="Different">
            <img src={stdStudy} alt="study" />
            <div className="Content">
                <Heading primary="Unique" secondary="How are we different?"/>
                <ul>
                <li><p>Our Live class program is a perfect mix of
new age learning methods, conventional
teaching and practice methods, to prepare
Pre-Medical students.
                </p></li>
                <li><p>
                TargetBased live Classes (NOT TIME BOUND)
Live classes are Recorded for
UNLIMITED revision
                </p></li>
                <li><p>PARENTS can talk with teachers on a weekly
basis.
Daily Practice Papers (DPP), Previous year
paper (PYP), Higher order thinking (HOT)
questions provided for an excellent learning
experience
</p></li>
</ul>
            </div>
        </div>
    )
}