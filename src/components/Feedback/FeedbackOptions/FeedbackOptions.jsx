export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((item, id) => (
        <button key={id} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
      {/* <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button> */}
    </>
  );
};
