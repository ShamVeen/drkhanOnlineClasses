import study from '../images/khan.png';
import drkhan from '../images/3.png';
import freeliveclass from '../images/Free Live class.gif'

export default function MainPage(props) {
  return (
    <div className="main-page">
      <div className="left-container">
        {props.content.length <= 0 && (
          <div>
            <h2>
              Prepare for <span className="bg-light">NEET</span> &{' '}
              <span className="bg-light">CUET</span>
            </h2>
            <h1>
              with <span id="name">Dr.Khan</span>
            </h1>
            <h3 style={{marginTop: '80px'}}>Book free demo class now.</h3>
          </div>
        )}
        {props.content.length > 0 && (
          <div>
            <h1>{props.content}</h1>
          </div>
        )}
        <button className="button-static" style={{ marginTop: '10px' }}>
          Book Now
        </button>
       {/* <div className='free-class'><img src={freeliveclass}/></div>  */}
      </div>
      {props.content.length <= 0 && (
        <div className="right-container">
          
            <img src={drkhan} alt="study" />
            <span>
              M.SC., SRF, PH.D. (LIFESCIENCE) AIPMT, <br/>GATE AND NET QUALIFIED 7
              YEARS TEACHING EXPERIENCE
            </span>
          
        </div>
      )}
    </div>
  );
}
