const EiffelTower = ({ tall, width, depth }) => {
  return (
    <>
      <h2>This is like {(tall / 330).toFixed(3).replace(/[.,]000$/, "")} Eiffel Tower's height</h2>
    </>
  );
};

export default EiffelTower;
