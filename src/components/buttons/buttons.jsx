import './buttons.css'

const Buttons = (props) => {
  return (
    <div className="calculator__buttons">
      <button onClick={props.reset} className="button__operation-purple">AC</button>
      <button onClick={props.sign} className="button__operation-purple">+-</button>
      <button onClick={props.input} value={'%'} className="button__operation-purple">%</button>
      <button onClick={props.input} value={' / '} className="button__operation">/</button>
      <button onClick={props.input} value={'7'} className="button__number">7</button>
      <button onClick={props.input} value={'8'} className="button__number">8</button>
      <button onClick={props.input} value={'9'} className="button__number">9</button>
      <button onClick={props.input} value={' * '} className="button__operation">*</button>
      <button onClick={props.input} value={'4'} className="button__number">4</button>
      <button onClick={props.input} value={'5'} className="button__number">5</button>
      <button onClick={props.input} value={'6'} className="button__number">6</button>
      <button onClick={props.input} value={' - '} className="button__operation">-</button>
      <button onClick={props.input} value={'1'} className="button__number">1</button>
      <button onClick={props.input} value={'2'} className="button__number">2</button>
      <button onClick={props.input} value={'3'} className="button__number">3</button>
      <button onClick={props.input} value={' + '} className="button__operation">+</button>
      <button onClick={props.input} value={'.'} className="button__number">.</button>
      <button onClick={props.input} value={'0'} className="button__number">0</button>
      <button onClick={props.del} className="button__number button__delete">Del</button>
      <button onClick={props.evaluate} className="button__operation">=</button>
    </div>
  );
};

export default Buttons;
