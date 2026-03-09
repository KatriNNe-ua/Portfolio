
function Input({ label, id, error, ...rest }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </>
  );
}

export default Input;
