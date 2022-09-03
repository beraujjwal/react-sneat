import React from "react";
import spinner from './css/spinner.module.css';

export default function DefaultSpinner() {
  return (
    <div className={spinner.spinnerContainer}>
      <div className={spinner.loadingSpinner}></div>
    </div>
  );
}