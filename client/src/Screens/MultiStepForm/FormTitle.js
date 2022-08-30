import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const FormTitle = ({title,children}) => {
  return (
    <div>
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 style={{fontSize: "25px"}}>{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  )
}
