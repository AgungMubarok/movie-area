import { useState } from "react";
import * as Boots from 'react-bootstrap'

export default function MovieCard({movieImage, movieName, year, imdbID}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Boots.Card>
        <Boots.Card.Img variant="top" src={movieImage} style={{height: '15rem', objectFit: "cover"}} />
        <Boots.Card.Body>
          <Boots.Card.Title>{movieName}</Boots.Card.Title>
          <Boots.Button variant="primary btn-sm" onClick={handleShow}>See Info</Boots.Button>
        </Boots.Card.Body>
      </Boots.Card>

      <Boots.Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Boots.Modal.Header closeButton>
          <Boots.Modal.Title id="contained-modal-title-vcenter">
            Detailed Info
          </Boots.Modal.Title>
        </Boots.Modal.Header>
        <Boots.Modal.Body>
          <Boots.Image src={movieImage} fluid />
          <h4 className="py-3">{movieName}</h4>
          <p>
            Title : {movieName}
          </p>
          <p>
            Year : {year}
          </p>
          <p>
            imdb ID : {imdbID}
          </p>
        </Boots.Modal.Body>
        <Boots.Modal.Footer>
          <Boots.Button onClick={handleClose}>Close</Boots.Button>
        </Boots.Modal.Footer>
      </Boots.Modal>
    </div>
  )
}
