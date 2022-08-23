import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./MainStyles.css"
export const MainScreen = ({title,children}) => {
  return (
    <div className = "mainback">
        <Container>
            <Row>
                <div className = "page">
                    {title && (
                        <>
                            <h1 className="heading">{title}</h1>
                            <hr/>
                        </>
                    )}
                    {children}
                </div>
            </Row>
        </Container>
    </div>
  )
}
