import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "../../components/content";
import List from "../../components/playlist/form";

export default function FormPlaylist(props) {
  return (
    <section className="home">
      <List/>
    </section>
  );
}