import { useRef, useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const MovieDetail = ({ selectedMovie }) => {

    let timer = useRef(null)

    const [movieDetails, setMovieDetails] = useState(null)

    const fetchMovieData = async () => {
        // here I can do my fetch
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + selectedMovie)
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data.Search[0])
                setMovieDetails(data.Search[0])
                // this.setState({
                //     movieDetails: data.Search[0]
                // })
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovieData()
        timer.current = setInterval(() => {
            console.log('time flies!')
        }, 1000)
    }, [])

    useEffect(() => {
        fetchMovieData()
    }, [selectedMovie])

    useEffect(() => {
        return () => {
            // componentWillUnmount
            console.log('bye bye!')
            clearInterval(timer.current)
        }
    }, [])

    console.log('MovieDetail rendered again')
    // the render() method gets fired again everytime there's a change in its state or in its props
    return (
        <div className="mt-3">
            <p>Movie selected: {selectedMovie}</p>
            {
                movieDetails && (
                    // I'm entering this portion of the JSX just when the fetch is completed
                    // so just when movieDetails in the state is not null anymore
                    <div>
                        <Card>
                            <Card.Img variant="top" src={movieDetails.Poster} />
                            <Card.Body>
                                <Card.Title>{movieDetails.Year}</Card.Title>
                                <Card.Text>
                                    {movieDetails.imdbID}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    )
}

export default MovieDetail