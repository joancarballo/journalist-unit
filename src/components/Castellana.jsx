const Castellana = ({ tall, width, length }) => {
  return (
    <>
      <h2>
        This is like {(length / 6400).toFixed(3).replace(/[.,]000$/, "")} Paseo de la Castellana lenght's {width && <span> and {(width / 100).toFixed(3).replace(/[.,]000$/, "")} width </span>}
      </h2>
    </>
  );
};

export default Castellana;
