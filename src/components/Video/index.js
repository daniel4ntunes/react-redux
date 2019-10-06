import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Módulo {activeModule.title}</strong>
    <br />
    <span>Aula {activeLesson.title}</span>
  </div>
);

const mapStateToProps = state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
});

export default connect(mapStateToProps)(Video);
