import React from 'react'
import "./StatsStyles.css"
import { Card } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineInstagram } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import axios from 'axios';
export const StatsCard = ({stat,setSuccess}) => {
   
  const deleteHandler = async ()=>{
    try{
      const url = "/api/stats/delete/"+stat._id;
      const res = await axios.delete(url); 
      setSuccess((prev)=>(!prev))
    }catch(err){
      console.log(err); 
    }
  }
  const handleEmail = ()=>{
    let email = "mailto:"+stat.email; 
    window.open(email,"_blank")
  }
  const handlePhone = ()=>{
    let phone = "tel:"+stat.phone;
    window.open(phone,"_blank")
  }
  const handleInstagram = ()=>{
    window.open(stat.instagram,"_blank")
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
          <span className="bold-text">business:</span> {stat.businessname}
          <br />
          <span className="bold-text">website:</span> {stat.website}
        </Card.Text>
        <Card.Link href="#">
          <IoMdCall onClick = {handlePhone}/>
        </Card.Link>
        <Card.Link href="#">
          <MdOutlineEmail onClick ={handleEmail}/>
        </Card.Link>
        <Card.Link href="#">
          <AiOutlineInstagram onClick= {handleInstagram}/>
        </Card.Link>
        <Card.Link href="#">
          <AiOutlineDelete onClick={deleteHandler} />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
