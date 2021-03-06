import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MovieDetail from './components/MovieDetail'
import MovieDropdown from './components/MovieDropdown'

// the goal for today is to work with lifecycle methods!
// all the lifecycle methods in a React Components just work in a Class

// constructor
// componentDidMount
// render
// componentDidUpdate
// componentWillUnmount
// all of these just work on a Class Component

const App = () => {
  // constructor(props) {
  // what is this??
  // it's the FIRST method fired in a react component
  // most of the constructor duties in a react component nowadays are IMPLICIT
  // super(props)
  // super() invokes the constructor method of Component
  // console.log("I'm the constructor method")
  // nowadays, the constructor method is pretty much useless
  // in the early days, you NEEDED a constructor, for mainly two things:
  // 1) is for declaring the state
  // this.state = {
  // setting the properties here...
  // }
  // 2) for binding event listeners to the 'this' object
  // this.logoClick = this.logoClick.bind(this)
  // }

  const [movieTitle, setMovieTitle] = useState('Batman Begins')
  const [showMovie, setShowMovie] = useState(true)

  useEffect(() => {
    console.log("I'm the componentDidMount method")
  }, [])

  const setMovie = (dropdownMovie) => {
    setMovieTitle(dropdownMovie)
  }

  // render() is a lifecycle method
  // it's the method in charge of returning the JSX out of your class component
  // render() it's fired multiple times during a component's lifecycle
  // render() gets fired every time there's a change in the STATE or in the PROPS of this component
  // it keeps in sync your component with its state (if there is one) or the props it's receiving
  console.log("I'm the render method")

  return (
    <div className="App mt-3">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>MOVIE CHOOSER</h2>
            <MovieDropdown movieTitle={movieTitle} setMovie={setMovie} />
          </Col>
        </Row>
        <Button onClick={() => setShowMovie(!showMovie)}>SHOW MOVIE</Button>
        {showMovie && (
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <MovieDetail selectedMovie={movieTitle} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default App
