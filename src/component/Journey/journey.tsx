import "./journey.css";
import DestinationIcon from  "../../assets/destination.svg";
import when from "../../assets/when.svg";
import Travelers from "../../assets/travelers.svg";
import Travel from "../../assets/travel-type.svg"
import Search from "../../assets/search.svg"
import Image from "next/image";

function JourneySearch() {
  return (
    <div className="journey-wrapper">
      <div className="journey-card">
        <div className="journey-title">
          FIND YOUR JOURNEY
        </div>
        <div className="journey-fields">
          <div className="field">
            <div 
            style={{ display: "flex", alignItems: "center", gap: "8px" }} 
            > 
            <Image src={DestinationIcon} alt="Destination Icon" className="icon" />
            <label>Destination</label>
            </div>
            <p>Why are you going ?</p></div>
            <div className="field">
             <div  style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Image src={Travel} alt="Travel Type Icon" width={20} height={20} />
            <label>Travel type</label>
            </div>
            <p>Adventure Travel</p>
            </div>
            <div className="field">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}> 
            <Image src={when} alt="Date Icon" width={20} height={20} />
            <label>When</label> 
            </div>
            <p>14 Dec 2022</p>
            </div>
            <div className="field">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}> 
            <Image src={Travelers} alt="Travelers Icon" width={20} height={20} />
            <label>Travelers</label>
            </div>
            <p>Why are you going ?</p>
            </div>
            <button className="button" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src={Search} alt="Search" width={20} height={20} />
            FIND
          </button>
        </div>
      </div>
    </div>
  );
}

export default JourneySearch;