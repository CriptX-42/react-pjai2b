import React, { useCallback, useRef } from 'react';

function App() {
  const inserirNome = useRef(null);
  const aceiteTermos = useRef({ value: false });

  const cadastrar = useCallback((e) => {
    e.preventDefault();
    console.log(inserirNome);
    console.log(inserirNome.current.value);
    console.log(aceiteTermos.current.value);
  }, []);

  const aceite = useCallback(() => {
    aceiteTermos.current.value = !aceiteTermos.current.value;
  }, []);

  return (
    <div className="App">
      <form onSubmit={cadastrar}>
        <input ref={inserirNome} type="text" placeholder="Seu nome aqui" />
        <button type="button" onClick={aceite}>
          Aceito
        </button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
