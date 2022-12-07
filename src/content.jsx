import jingleBells from "./jingle-bell.svg";
import santa from "./sleigh.svg";
import reindeer from "./reindeer.svg";
import christmasTree from "./christmas-tree.png";


export default function getContent() {
  return (
  
  <div className="content-container">
  <div className=" animate__animated animate__shakeX  jingleBells-container">
    <img
      className="jingleBells-image"
      src={jingleBells}
      alt="jingle Bells"
    />
    <img
      className="jingleBells-image"
      src={jingleBells}
      alt="jingle Bells"
    />
  </div>
  <div className=" animate__animated animate__fadeOutRightBig reindeer-container">
    <img className="reindeer-image" src={santa} alt="santa's sleigh" />
    <img className="reindeer-image" src={reindeer} alt="reindeer" />
    <img className="reindeer-image" src={reindeer} alt="reindeer" />
    <img className="reindeer-image" src={reindeer} alt="reindeer" />
    <img className="reindeer-image" src={reindeer} alt="reindeer" />
  </div>
  <h1> Christmas Countdown </h1>{" "}
  <div className="christmas-tree-container">
    <img
      className="animate__animated animate__rubberBand christmas-tree"
      src={christmasTree}
    />
  </div>
  
      </div>
  )
}
