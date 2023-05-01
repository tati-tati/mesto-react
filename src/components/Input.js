function Input(props) {
  return (
    <>
      <input
        className={`popup__input ${props.class}`}
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
      />

      <span className="error" id={`${props.id}-error`}></span>
    </>
  );
}

export default Input;
