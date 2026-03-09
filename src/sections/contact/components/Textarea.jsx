
function Textarea({ label, id, error, ...rest }) {
  return (
	<>
	  {label && <label htmlFor={id}>{label}</label>}
	  <textarea id={id} {...rest} ></textarea>
	  {error && (
		<div className="error-message">
		  {error}
		</div>
	  )} 
	</>
  );
}

export default Textarea;
