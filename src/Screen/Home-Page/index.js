import React, { useState } from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import Quest from "../../Component/Data/data";
import Button from "../../Component/Button/button";
import Raadio from "../../Component/Input/input";
import swal from "sweetalert";

export default function Home() {
  const [currenQuestion, setcurrenQuestion] = useState(0);
  const [correctAnsw, setCorrectAnsw] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState(false);
  const [Show, setShow] = useState(false);

  const Next = () => {
    if (correctAnsw === 0) {
      swal("Selet One Option Plase.");
    } else {
      if (currenQuestion !== Quest.length - 1) {
      }
      setResult(true);
      if (correctAnsw) {
        setQuestionNumber(questionNumber + 1);
        setcurrenQuestion(currenQuestion + 1);
        setCorrectAnsw(0);
      }
    }
  };
  console.log("chalobhai", currenQuestion);
  const Restart = () => {
    setQuestionNumber(0);
    setShow(false);
    setcurrenQuestion(0);
    setResult(false);
  };
  const Submit = () => {
    if (Quest[currenQuestion].isCorrect === correctAnsw) {
      setQuestionNumber(questionNumber + 1);
    }
    setShow(true);
    if ((questionNumber / Quest.length) * 100 >= 80) {
      swal("A1 Grade Very Good!", "", "success");
    } else if ((questionNumber / Quest.length) * 100 >= 70) {
      swal("B  good could do better", "", "success");
    } else if ((questionNumber / Quest.length) * 100 >= 60) {
      alert();
      swal("C  need to improve");
    } else {
      swal({
        title: "Sorry Fail",
        text: "",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Container>
        <Row className="main-Row">
          <Col className="main-Col-Card" xs={11} sm={11} md={11} lg={6} xl={6}>
            {Show ? (
              <Row className="total-Per-Main-Row">
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <p className="total-Answer-Text">
                    Your Total Awnsers is Correact {questionNumber}
                  </p>
                  <hr />
                  <p className="total-Answer-Text">
                    Your Total Question is {Quest.length}
                  </p>
                  <p className="percentage-Text">
                    Your Percentage is {(questionNumber / Quest.length) * 100} %
                  </p>
                </Col>
                <Col
                  id="reStart-Button-Col"
                  xs={11}
                  sm={11}
                  md={11}
                  lg={12}
                  xl={12}
                >
                  <Button
                    Text={"Restart"}
                    className="restStart-Button"
                    onClick={Restart}
                  />
                </Col>
              </Row>
            ) : (
              <Col xs={11} sm={11} md={11} lg={12} xl={12}>
                <h2 className="ques-Text">
                  Question # {currenQuestion + 1} out of {Quest.length}
                </h2>
                <hr />
                {
                  <h5 className="ques-Text">
                    Q/{currenQuestion + 1}: {Quest[currenQuestion].text}
                  </h5>
                }
                <div key={currenQuestion + currenQuestion}>
                  <Raadio
                    onChange={(e) => {
                      setCorrectAnsw(e.target.value);
                    }}
                    Name={"question" + currenQuestion}
                    currenQuestion={currenQuestion}
                  />
                </div>
                {result ? (
                  <Col
                    className="sub-Nex-Button-Col"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={12}
                    xl={12}
                  >
                    <Button
                      Text={"Submit"}
                      className="submit-Button"
                      onClick={Submit}
                    />
                  </Col>
                ) : (
                  <Col
                    className="sub-Nex-Button-Col"
                    xs={11}
                    sm={11}
                    md={11}
                    lg={12}
                    xl={12}
                  >
                    <Button
                      Text={"Next"}
                      className="next-Button"
                      onClick={Next}
                    />
                  </Col>
                )}
              </Col>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
