import ClipLoader from "react-spinners/ClipLoader";
import PuffLoader from "react-spinners/PuffLoader";
import RingLoader from "react-spinners/RingLoader";
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";

const Spinners = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      <ClipLoader color="#36d7b7" size={50} />
      <PuffLoader color="#ff5733" size={60} />
      <RingLoader color="#4285F4" size={70} />
      <BarLoader color="#f39c12" width={100} height={10} />
      <BeatLoader color="#3498db" size={15} />
    </div>
  );
};

export default Spinners;
