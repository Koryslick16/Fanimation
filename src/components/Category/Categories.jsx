import React, { useState } from "react";
import "./categories.css";
import { NavLink } from "react-router-dom";

const Categories = () => {

  return (
    <>

<div className="cat">
          <h3>Categories</h3>
          <div className="butons">
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return isActive
                  ? {
                      width: "50px",
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      width: "50px",
                      backgroundColor: "lightgray",
                    };
              }}
            >
              <h4>All</h4>
            </NavLink>

            <NavLink
              to="/ceilingFan"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Ceiling Fans</h4>
            </NavLink>

            <NavLink
              to="/pedestalFan"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Pedestal Fans</h4>
            </NavLink>

            <NavLink
              to="/wallFan"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Wall Fans</h4>
            </NavLink>

            <NavLink
              to="/exhaustFans"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Exhaust Fans</h4>
            </NavLink>

            <NavLink
              to="/accessories"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#53284f",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Accessories</h4>
            </NavLink>
</div>
</div>
     
    </>
  );
};

export default Categories;
