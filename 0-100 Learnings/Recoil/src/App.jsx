import React from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';
import { countState, evenSelector } from './store/atoms/count';
function App() {
  return (
    <RecoilRoot>
      <DisplayCount />
      <Buttons />
      <Check/>
    </RecoilRoot>
  );
}

function DisplayCount() {
  const count = useRecoilState(countState);
  return <>{count}</>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}
function Check(){
  const isEven = useRecoilValue(evenSelector);
  
  
  return(
    <div>
      {isEven?"It is even":null}
    </div>
  );
}

export default App;
