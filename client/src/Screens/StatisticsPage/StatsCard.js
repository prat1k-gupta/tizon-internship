import React from 'react'
import "./StatsStyles.css"
import { Card } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineInstagram } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
export const StatsCard = ({stat}) => {
  const deleteHandler = ()=>{
    window.alert("Are you sure?")
  }
  return (
    <Card
      style={{ width: "100%", fontSize: 18, marginBottom: 10 }}
      className={"card"}
    >
      <Card.Body>
        <div className="single-line">
          <Card.Title>{stat.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {stat.business}
          </Card.Subtitle>
        </div>
        <Card.Text>
          <span className="bold-text">Name: </span>
          {stat.name}
          <br />
          <span className="bold-text">business:</span> {stat.business}
          <br />
          <span className="bold-text">website:</span> {stat.website}
        </Card.Text>
        <Card.Link href="#">
          <IoMdCall />
        </Card.Link>
        <Card.Link href="#">
          <MdOutlineEmail />
        </Card.Link>
        <Card.Link href="#">
          <AiOutlineInstagram />
        </Card.Link>
        <Card.Link href="#">
          <AiOutlineDelete onClick={deleteHandler}/>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
