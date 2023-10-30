const SoccerField = ({ tall, width, length }) => {
  return (
    <>
      {width && length && <h2>The area is like {((width * length) / 7140).toFixed(3).replace(/[.,]000$/, "")} Soccer Fields</h2>}
      {width && <h2>The width of {(width / 68).toFixed(3).replace(/[.,]000$/, "")} Soccer Fields</h2>}
      {length && <h2>The length of {(length / 105).toFixed(3).replace(/[.,]000$/, "")} Soccer Fields</h2>}
    </>
  );
};

export default SoccerField;
