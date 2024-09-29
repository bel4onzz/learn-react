import PropTypes from "prop-types";

const MoodDisplay = ({ mood, emoji }) => {
  return (
    <>
      <div className="row gy-2">
        <div className="col-12">
          {mood ? (
            <>
              <h2 className="mb-4">Your Current Mood Is</h2>
              <p className="fs-1">{emoji}</p>
            </>
          ) : (
            <h2 className="mb-4">Select Mood First</h2>
          )}
        </div>
      </div>
    </>
  );
};

MoodDisplay.propTypes = {
  mood: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default MoodDisplay;
