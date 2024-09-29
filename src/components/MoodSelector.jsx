import PropTypes from "prop-types";

const MoodSelector = ({ moods, setMood }) => {
  return (
    <>
      <div className="row gy-2 mb-4">
        {moods.map((mood) => (
          <div key={mood} className="col-3">
            <button className="w-100" onClick={() => setMood(mood)}>
              {mood}
            </button>
          </div>
        ))}

        <div className="col-12">
          <button className="w-100" onClick={() => setMood("")}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

MoodSelector.propTypes = {
  moods: PropTypes.array.isRequired,
  setMood: PropTypes.func.isRequired,
};

export default MoodSelector;
