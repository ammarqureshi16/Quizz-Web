import React from "react";
import "./fbFeed.css";
import { Row, Col } from "react-bootstrap";
import FbImageLibrary from "react-fb-image-grid";
import Button from "../Button/button";
import { AiFillLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";

export default function FbFeed(props) {
  return (
    <>
      <Row className="main-Row-Face">
        <Col className="card-Main-Col" xs={12} sm={12} md={12} lg={4} xl={4}>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            className="dp-Pic-Text-Col"
          >
            <img className="dp-Pic" src={props.Dp} />
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <label className="user-Id-Text">{props.UserName}</label>
              <label className="date-Time">{props.Date}</label>
              <label>{props.Title}</label>
            </Col>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <FbImageLibrary style={{ width: "100%" }} images={props.image} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={11} xl={11}>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Button
                className="like-Button"
                Icon={<AiFillLike size={20} />}
                Text={"Like"}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Button
                className="comment-Button"
                Icon={<GoComment size={18} />}
                Text={"Comment"}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Button
                className="like-Button"
                Icon={<RiShareForwardLine size={20} />}
                Text={"Share"}
              />
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
}
