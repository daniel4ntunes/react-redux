import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <p><strong>{activeModule.title && `Módulo ${activeModule.title}`}</strong></p>
    <p><span>{activeLesson.title && `Aula ${activeLesson.title}`}</span></p>
  </div>
);

const mapStateToProps = state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
});

export default connect(mapStateToProps)(Video);
