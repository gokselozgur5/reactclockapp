import './App.css';
import React, { Component } from 'react';
import Clock from './Clock';


class App extends Component {

  d = new Date;
 

  fullname = undefined;
  
  days =  ["pazar", "pazartesi", "salı", "çarşamba", "perşembe","cuma", "cumartesi"] 
  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  }




  componentDidMount() {
  
    this.fullname = prompt("Lutfen isim giriniz:");
    setInterval(() => (
      this.setClock()
    ), 1000);
  }

  setClock = () => {
    const currentDate = new Date;
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({ secondRatio: secondRatio });
    this.setState({ minuteRatio: minuteRatio });
    this.setState({ hourRatio: hourRatio });
  }

  render() {

    const { secondRatio, minuteRatio, hourRatio } = this.state;

    return (
      <fragment>
        <div>  <h1 className="text1">Merhaba, {this.fullname}! Hoş Geldin! </h1>
        <div className="time">
        <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} /> 
        </div>
          <h1 className="text2">{this.days[this.d.getDay()]} tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.</h1>
        </div>
      </fragment>
    );
  }
}

export default App;
