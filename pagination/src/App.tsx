import Button from './components/Button';

const App = () => {
  const buttons = Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (v) => (
    <Button
      className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
      handleClick={() => console.log('ciao')}
      title={v.toString()}
    />
  ));
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="grid bg-red-400 grid-flow-col grid-rows-2 ">
        <div
          className="bg-green-600 grid grid-flow-col m-auto
         "
        >
          <Button
            className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
            handleClick={() => console.log('ciao')}
            title={'elimina'}
          />
          <Button
            className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
            handleClick={() => console.log('ciao')}
            title={'elimina 1'}
          />
        </div>
        <div className="grid grid-cols-3">{buttons}</div>
        <div className="grid grid-flow-row row-span-4">
          <Button
            className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
            handleClick={() => console.log('ciao')}
            title={'+'}
          />
          <Button
            className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
            handleClick={() => console.log('ciao')}
            title={'-'}
          />
          <Button
            className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
            handleClick={() => console.log('ciao')}
            title={'x'}
          />
          <Button
            className="rounded bg-orange-400 px-4 py-2 hover:bg-orange-300 transition duration-75"
            handleClick={() => console.log('ciao')}
            title={'/'}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
