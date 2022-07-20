import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles.scss'
import ReleaseItem from "./release_item/CardReleaseItem";
import { data } from "./release_item/data";
export default function NewRelease() {
  return (
    <div className="newReleaseContainer">
      <h4>Mới phát hành</h4>
      <Container>
        <Row>
          <Col className="col">
            {
              data.map((item) => (
                <ReleaseItem key={item.id} img = {item.img} alt = {item.alt} name = {item.name} subtitle = {item.subtitle}/>
              ))
            }
            </Col>
          <Col className="col">{
              data.map((item) => (
                <ReleaseItem key={item.id} img = {item.img} alt = {item.alt} name = {item.name} subtitle = {item.subtitle}/>
              ))
            }</Col>
          <Col className="col">{
              data.map((item) => (
                <ReleaseItem key={item.id} img = {item.img} alt = {item.alt} name = {item.name} subtitle = {item.subtitle}/>
              ))
            }</Col>
        </Row>
      </Container>
    </div>
  );
}
