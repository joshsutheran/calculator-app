import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="calculator">
        <div className="darkMode">Toggle Dark Mode Here!</div>
        <div className="calculator__display">
          <h2 className="calculator__display--calc">Calculation will go here!</h2>
          <h1 className="calculator__display--ans">871</h1>
        </div>
        <div className="calculator__buttons">
          <button className="button__reset">C</button>
          <button className="button__operation-grey">+-</button>
          <button className="button__operation-grey">%</button>
          <button className="button__operation">/</button>
          <button className="button__number">7</button>
          <button className="button__number">8</button>
          <button className="button__number">9</button>
          <button className="button__operation">*</button>
          <button className="button__number">4</button>
          <button className="button__number">5</button>
          <button className="button__number">6</button>
          <button className="button__operation">-</button>
          <button className="button__number">1</button>
          <button className="button__number">2</button>
          <button className="button__number">3</button>
          <button className="button__operation">+</button>
          <button className="button__number">.</button>
          <button className="button__number">0</button>
          <button className="button__number button__delete">Delete</button>
          <button className="button__operation">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
