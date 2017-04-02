import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import singleDigit from './HappyNum.js';

let total = 0;
console.time();

const isHappy = (num) => {
  let sum = num;
  let run = true;

  /**
   * Sum the numbers
   *  If sum === 1 then keep that number, its happy
   *  If sum === 4 that number is no good, move on to next num
   */
  while (run) {

    // Number is happy
    if (sum === 1) {
      total += num;
    }

    // Exit loop if sum is 1 or 4
    if (sum === 1 || sum === 4) {
      run = false;
    }

    sum = singleDigit(sum);
  }
}


// Note: this needs to start at 1 not 0
for (let i = 1; i <= 1000000; i++) {
  isHappy(i);
}

console.timeEnd();
console.log('results:', total);


let fetchData = {
  method: 'POST',
  body: total,
  mode: 'no-cors',
  headers: new Headers( {
    "Access-Control-Expose-Headers": '*',
    "Content-Type": "text/plain",
    "X-COOL-SUM": total,
  })
};

// Code10: That's not a cool sum.
fetch('http://dev.getethos.com/code15', fetchData).then(function(res) {
  console.log(fetchData.headers.get('X-COOL-SUM'));
  if(res.ok) {
    console.log('success', res, total);
  } else {
    var error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
}).catch(function(err) {
  console.log('err', err);
});



class App extends Component {
  render() {
    return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React Hi</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
    );
  }
}

export default App;
