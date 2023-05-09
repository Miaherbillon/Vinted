const InputPublish = ({ id, label, type, state, setState, textArea }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {!textArea ? (
        <input
          id={id}
          type={type}
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
      ) : (
        <textArea
          id={id}
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        ></textArea>
      )}
    </div>
  );
};
export default InputPublish;
