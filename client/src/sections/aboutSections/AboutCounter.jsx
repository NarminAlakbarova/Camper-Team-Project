
import cameraImg from "../../assets/img/about/camera.png";
import compassImg from "../../assets/img/about/compass.png";
import viewImg from "../../assets/img/about/view.png";
import luggageImg from "../../assets/img/about/luggage.png";
import Counter from "../../components/Counter";

const formatCount = (count) => {
  if (count >= 100000) {
    return count / 1000 + "K";
  } else if (count >= 100) {
    return count + "+";
  }
  return count.toString();
};

const CounterCard = ({ iconSrc, count, label }) => (
  <div className="col-xl-3 col-md-4 my-3">
    <div className="card">
      <div className="img">
        <img src={iconSrc} alt="" />
      </div>
      <div className="content">
        <Counter initialValue={count} className="text" format={formatCount} />
        <p>{label}</p>
      </div>
    </div>
  </div>
);

const AboutCounter = () => {
  return (
    <div id="about-counter">
      <div className="container">
        <div className="about-counter">
          <div className="row">
            <CounterCard
              iconSrc={cameraImg}
              count={500}
              label="Locations"
            />
            <CounterCard
              iconSrc={luggageImg}
              count={200000}
              label="Travelers"
            />
            <CounterCard
              iconSrc={compassImg}
              count={20}
              label="Years of service"
            />
            <CounterCard
              iconSrc={viewImg}
              count={100}
              label="Best deals"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
