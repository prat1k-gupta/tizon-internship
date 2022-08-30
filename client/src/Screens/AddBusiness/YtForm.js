import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';

export const YtForm = ({size,index,list,addMore}) => {
    const handleAdd = ()=>{ 
        addMore((prev)=>(
            [...prev,
            {
                link: ""
            }]
        ))
    }
    const handleLinkChange = (e,index)=>{
        const {name,value} = e.target
        const currentList = [...list]
        currentList[index][name] = value
        addMore(currentList)
    }
    const handleRemove = (index)=>{
        const currentList = [...list];
        currentList.splice(index,1); 
        addMore(currentList)
    }


  return (
    <Form.Group className="mb-1" controlId="formBasicTwitter">
      <Form.Label>youtube</Form.Label>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Form.Control
          name="link"
          type="url"
          onChange={(e)=>{handleLinkChange(e,index)}}
          value={list[index].link}
          placeholder="https://youtube.com/"
          className="mb-2"
        />
        {size > 1 && <AiOutlineDelete size={30} onClick = {()=>{handleRemove(index)}} />}
      </div>
      {size - 1 === index && size < 4 && (
        <Button className="ButtonInput mt-3" onClick={handleAdd}>
          Add More
        </Button>
      )}
    </Form.Group>
  );
}
