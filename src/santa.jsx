import santa from "./sleigh.svg";
import reindeer from "./reindeer.svg";

export default function SantaReindeer() {
  return (
    <div className=" animate__animated animate__fadeOutRightBig reindeer-container">
      <img className="reindeer-image" src={santa} alt="santa's sleigh" />
      <img className="reindeer-image" src={reindeer} alt="reindeer" />
      <img className="reindeer-image" src={reindeer} alt="reindeer" />
      <img className="reindeer-image" src={reindeer} alt="reindeer" />
      <img className="reindeer-image" src={reindeer} alt="reindeer" />
    </div>
  );
}
