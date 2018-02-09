import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '33%'
  }
}

class Exercise extends React.Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }

  render () {
    const { openModal, closeModal, title, muscleGroup, description } = this.props;
    return (
      <Modal
        contentLabel="Exercise"
        isOpen={openModal}
        onBlur={closeModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="title">{title}</h2>
        <p className="muscleGroup">{muscleGroup}</p>
        <p className="description">{description}</p>
      </Modal>
    )
  }
}

export default Exercise;
