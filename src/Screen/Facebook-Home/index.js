import React from "react";
import FbFeed from "../../Component/FacebookFeed/fbFeed";
import "./index.css";
import Dp from "../../Assets/Image/dppic.jpg";
// import upload from "../../Assets/Image/upload.jpg"
import DpPic from "../../Assets/Image/dppic.jpg";
import Upload from "../../Assets/Image/upload.jpg";

export default function Facbook() {
  return (
    <>
      <FbFeed
        Dp={Dp}
        UserName={"Ammae Qureshi"}
        Date={Date.now()}
        Title={"Today In enjoys"}
        image={[DpPic, DpPic, DpPic, Upload, DpPic, DpPic, DpPic]}
      />
    </>
  );
}
