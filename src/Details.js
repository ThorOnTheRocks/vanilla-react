import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = {
    loading: true,
    showModal: false,
  }

  async componentDidMount() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {

    if (this.state.loading) {
      return <h2>loading...</h2>
    }
    const { animal, breed, name, city, state, description, images, showModal } = this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <ThemeContext.Consumer>
                      {([theme]) => (
                        <button onClick={this.adopt} style={{ backgroundColor: theme }}>Yes</button>
                      )}
                    </ThemeContext.Consumer>
                    <ThemeContext.Consumer>
                      {([theme]) => (
                        <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>No</button>
                      )}
                    </ThemeContext.Consumer>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
    )
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}