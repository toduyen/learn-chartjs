
import React from "react";
import './App.css';
import UseFetching from './Hook/UseFetching';
import {Line} from 'react-chartjs-2';

function App() {
  const [{Data , Loading , Error},setUrl] = UseFetching('https://api.openweathermap.org/data/2.5/forecast?q=hanoi&units=metric&appid=84f0c05e16abc57b03ca8fa00b59f78e', {list: []});
  console.log(Data);
  return (
    <div className="App">
      <h1>Nhiệt độ tại hưng yên</h1>
      {Error && ('Error')}
      {
      Loading ? 
      ('Loading...') : 
      <Line
      data={{
        labels:  Data?.list.map(value => {return(value?.dt_txt)}),
        datasets: [{
          label: 'Nhiệt độ cao nhất',
          data: Data?.list.map(value => {return(value?.main?.temp_max)}),
          fill: false,
          borderColor: 'Red',
          tension: 1
        },
        {
          label: 'Nhiệt độ thấp nhất',
          data: Data?.list.map(value => {return(Math.ceil(value?.main?.temp_min))}),
          fill: false,
          borderColor: 'Green',
          tension: 1
        },
        {
          label: 'Độ ẩm',
          data: Data?.list.map(value => {return(value?.main?.humidity)}),
          fill: false,
          borderColor: 'black',
          tension: 1
        },
        {
          label: 'Tốc độ gió',
          data: Data?.list.map(value => {return(value?.wind?.speed)}),
          fill: false,
          borderColor: 'Gray',
          tension: 1
        },
      ]
      }}
      />
      }
    </div>
  );
}

export default App;
