import React from 'react'
import axios from 'axios'
import './index.css';

import Exercise from './exercise'

class Exercises extends React.Component {
  state = {
    exercises: [],
    modalIsOpen: false
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/exercises.json')
      .then(response => {
        console.log(response)
        this.setState({ exercises: response.data })
      })
      .catch(error => console.log(error))
  }

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render () {
    return (
      <div className="exercises">
        {this.state.exercises.map((exercise) =>
          <div key={exercise.id}>
          <button
            className="exercise"
            onClick={this.handleOpenModal}
          >
            <h4>{exercise.title}</h4>
          </button>

            <Exercise
              openModal={this.state.modalIsOpen}
              closeModal={this.handleCloseModal}
              title={exercise.title}
              muscleGroup={exercise.muscle_group}
              description={exercise.description}
            />
          </div>
        )}
      </div>

    );
  }
}

export default Exercises;
