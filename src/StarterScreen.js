
function StarterScreen({ len , dispatch }) {

  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{len} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start", status: "active" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StarterScreen;
