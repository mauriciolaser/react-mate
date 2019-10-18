import React from 'react';
import Title from './components/Title';
import BannerImage from './components/BannerImage';
import BannerVideo from './components/BannerVideo';
import Description from './components/Description';
import Info from './components/Info';
import Instagram from './components/Instagram';
import Newsletter from './components/Newsletter';
import './App.css';

// function App() {
//   return (
//     <div className="App" style={{ backgroundColor: '#111111'}}>
//       <Title />
        
      
//     </div>
//   );
// }

// export default App;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 640 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className="App" style={{display: 'flex', flexDirection: 'column'}} >
        <Title />
    {/*condicional para la pantalla*/}
        {isDesktop ? (
          <div style={{ width: '100%', backgroundColor: '#111111' }}>
            <BannerVideo />
          </div>
        ) : (
            <div style={{ width: '100%', backgroundColor: '#111111' }}>
            
              <BannerImage style={{ minHeight: 300 }} />
          </div>
          )}
        <Description />
        <Info />
        <Instagram />
        <Newsletter />
      </div>
    );
  }
}