import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
  align: "center",
};
const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
