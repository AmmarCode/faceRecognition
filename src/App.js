import { React, Component } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from './components/Register/Register';

const particlesOptions = {
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 90,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 110,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      route: "signin",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    console.log("submitClicked");
    this.setState({ imageUrl: this.state.input });
  };

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div>
        <Particles id="tsparticles" options={particlesOptions} />
        <Navigation currentRoute={this.state.route} onRouteChange={this.onRouteChange} />
        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ): this.state.route === "register" ? (
          <Register onRouteChange={this.onRouteChange} />
        ): (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition imageUrl={this.state.input} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
