import './display.css'

const Display = (props) => {
  return (
    <div className="calculator__display">
      <h2 className="calculator__display--calc">{props.calculation}</h2>
      <h1 className="calculator__display--ans">{eval(props.answer)}</h1>
    </div>
  );
};

export default Display
