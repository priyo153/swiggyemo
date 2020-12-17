import { Drawer } from "@material-ui/core";
import React, { Component } from "react";
import FindUser from "../../containers/findUser/findUser";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-toprow">
          <div className="home-toprow-left">
            <div className="homeHeader">
              <Drawer anchor="right" open={false} onClose={() => {}}>
                <div style={{ width: "25vw" }}>abc</div>
              </Drawer>
              <div style={{ display: "flex" }}>
                <img
                  src="https://img.icons8.com/color/96/000000/kawaii-pizza.png"
                  alt="swiggy"
                />
                <h1>swiggy</h1>
              </div>
              <div className="login-signup">
                <button
                  className="btn btn-link"
                  style={{
                    backgroundColor: "none",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Login
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="captions">
              <h1>Hungry?</h1>
              <h3>Order food from favourite restaurants near you.</h3>
            </div>
            <FindUser />
          </div>

          <div className="home-toprow-right"></div>
        </div>

        <div className="home-middlerow">
          <div className="home-middlerow-col">
            <img
              src="https://img.icons8.com/fluent/48/000000/thumb-up.png"
              alt="thumbsup"
            />
            <h1>no minimum order</h1>
            <p>
              Order in for yourself or for the group, with no restrictions on
              order value
            </p>
          </div>
          <div className="home-middlerow-col">
            <img
              src="https://img.icons8.com/fluent/96/000000/map-marker.png"
              alt="map"
            />
            <h1>Live Order Tracking</h1>
            <p>
              Know where your order is at all times, from the restaurant to your
              doorstep
            </p>
          </div>
          <div className="home-middlerow-col">
            <img
              src="https://img.icons8.com/fluent/96/000000/delivery-scooter.png"
              alt="delivery"
            />
            <h1>Lightning-Fast Delivery</h1>
            <p>
              Experience Swiggy's superfast delivery for food delivered fresh &
              on time
            </p>
          </div>
        </div>
      </div>
    );
  }
}
