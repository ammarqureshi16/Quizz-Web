import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import Quest from "../../Component/Data/data"
import Button from "../../Component/Button/button"
import Raadio from "../../Component/Input/input"
export default function Home() {
  const [questNo, setQuestNo] = useState(0)
  const [optionIndexNum, setOptionIndexNum] = useState(0)
  const NextQue = () => {
    setQuestNo(questNo + 1)
    setOptionIndexNum(optionIndexNum + 1)
  }
  return (
    <>
    <Container>
      <Row className="main-Row">
        <Col className="main-Card-Col" xs={12} sm={12} md={12} lg={11} xl={11}>
          <h1 className="quiz-Text-Heading">{Quest[questNo].text}</h1>
          <Raadio optionIndexNum={optionIndexNum} />
          <Button onClick={NextQue} Text="Next" />
        </Col>
      </Row>
    </Container>
    </>
  );
}