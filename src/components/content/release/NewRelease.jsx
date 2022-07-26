import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles.scss'
import { useSelector } from 'react-redux'
import ReleaseItem from "./release_item/CardReleaseItem";
import { data } from "./release_item/data";
import dataSlice from "../../../redux/dataSlice/dataSlice";
import { dataSelector } from "../../../redux/selectors";

export default function NewRelease() {
  const array = useSelector(dataSelector)

  return (
    <div className="newReleaseContainer">
      <h4>New Release</h4>
      <Container>
        <Row className="row">
          <Col className="col1">
            {
              array.slice(20,23).map((item) => (
                <ReleaseItem key={item.id} id = {item.id} img = {item.links.images[1].url} alt = "loading" name = {item.name} author = {item.author}/>
              ))
            }
            </Col>
          <Col className="col2">
            {
              array.slice(4,7).map((item) => (
                <ReleaseItem key={item.id} id = {item.id} img = {item.links.images[1].url} alt = "loading" name = {item.name} author = {item.author}/>
              ))
            }
            </Col>
          <Col className="col3">
            {
              array.slice(8,11).map((item) => (
                <ReleaseItem key={item.id} id = {item.id} img = {item.links.images[1].url} alt = "loading" name = {item.name} author = {item.author}/>
              ))
            }
            </Col>
        </Row>
      </Container>
    </div>
  );
}
