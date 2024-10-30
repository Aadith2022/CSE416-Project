import React, { useState } from "react";
import "../App.css"

export const MapFilter = ({ displayCurrent, displaySMD, displayMMD, displayPrecincts }) => {
    const [currentSelected, setCurrentSelected] = useState(null);
    const [smdSelected, setSmdSelected] = useState(null);
    const [mmdSelected, setMmdSelected] = useState(null);
    const [precinctsSelected, setPrecinctsSelected] = useState(null);

    return (
        <div className="map_filter">
            <button
                className={`map_filter_option ${currentSelected === "Current" ? "selected" : ""}`}
                onClick={() => setCurrentSelected((prevSelected) => {
                    const newSelection = prevSelected === "Current" ? "" : "Current";
                    return newSelection
                })}
            >
                Current
            </button>
            <button
                className={`map_filter_option ${smdSelected === "SMD" ? "selected" : ""}`}
                onClick={() => setSmdSelected((prevSelected) => {
                    const newSelection = prevSelected === "SMD" ? "" : "SMD";
                    return newSelection;
                })}
            >
                SMD
            </button>
            <button
                className={`map_filter_option ${mmdSelected === "MMD" ? "selected" : ""}`}
                onClick={() => setMmdSelected((prevSelected) => {
                    const newSelection = prevSelected === "MMD" ? "" : "MMD";
                    return newSelection;
                })}
            >
                MMD
            </button>
            <button
                className={`map_filter_option ${precinctsSelected === "Precincts" ? "selected" : ""}`}
                onClick={() => setPrecinctsSelected((prevSelected) => {
                    const newSelection = prevSelected === "Precincts" ? "" : "Precincts";
                    return newSelection
                })}
            >
                Precincts
            </button>
        </div>
    );
};