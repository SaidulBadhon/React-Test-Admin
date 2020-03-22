// in src/Dashboard.js
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader, Typography } from "@material-ui/core/";

import { Line } from "react-chartjs-2";

import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: {
        labels: [1, 5, 10, 20, 30],
        datasets: [
          {
            label: "Revenue",
            data: [100, 150, 350, 300, 500],
            backgroundColor: "rgba(0,255, 0, 0)",
            borderColor: "rgba(0,255, 0, .75)",
            borderWidth: 2
          }
        ]
      },
      RevenueData: {
        labels: [1, 5, 10, 20, 30],
        datasets: [
          {
            label: "Revenue",
            data: [100, 150, 350, 300, 500],
            backgroundColor: "rgba(0,255, 0, 0)",
            borderColor: "rgba(0,255, 0, .75)",
            borderWidth: 2
          }
        ]
      },
      SubscribersData: {
        labels: [1, 5, 10, 20, 30],
        datasets: [
          {
            label: "Subscribers",
            data: [100, 80, 150, 90, 50],
            backgroundColor: "rgba(0,255, 0, 0)",
            borderColor: "rgba(255,0, 0, .75)",
            borderWidth: 2
          }
        ]
      },

      CommentsData: {
        labels: [1, 5, 10, 20, 30],
        datasets: [
          {
            label: "Comments",
            data: [70, 80, 125, 90, 50],
            backgroundColor: "rgba(0,255, 0, 0)",
            borderColor: "rgba(90, 105, 255, .75)",
            borderWidth: 2
          }
        ]
      },

      WatchTimeData: {
        labels: [1, 5, 10, 20, 30],
        datasets: [
          {
            label: "WatchTime",
            data: [100, 80, 50, 80, 60],
            backgroundColor: "rgba(0,255, 0, 0)",
            borderColor: "rgba(248,203, 83, .75)",
            borderWidth: 2
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="Dashboard">
        <div className="Cards">
          <div className="Card">
            <div className="CardHeader">
              <div className="Icon">
                <AttachMoneyRoundedIcon
                  style={{
                    color: "Green",
                    alignContent: "center",
                    fontSize: "35px",
                    paddingTop: "7px"
                  }}
                />
              </div>

              <div className="Ammount">
                <h2>500K</h2>
              </div>
            </div>

            <div className="Name">
              <h2>Revenue Generated</h2>
            </div>

            <div className="Line-Grapth">
              <Line
                className="Line-Grapth-Line"
                options={{
                  legend: {
                    display: false
                  },
                  elements: {
                    point: {
                      radius: 5
                    }
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          display: false
                        },
                        gridLines: {
                          display: false
                        }
                      }
                    ],
                    xAxes: [
                      {
                        ticks: {
                          display: false
                        },
                        gridLines: {
                          display: false
                        }
                      }
                    ]
                  },
                  responsive: true
                }}
                data={this.state.RevenueData}
              />
            </div>
          </div>

          <div className="Card">
            <div className="CardHeader">
              <div
                className="Icon"
                style={{ backgroundColor: "rgba(255,0, 0, 0.25)" }}
              >
                <PeopleOutlineIcon
                  style={{
                    color: "Red",
                    alignContent: "center",
                    fontSize: "35px",
                    paddingTop: "7px"
                  }}
                />
              </div>

              <div className="Ammount">
                <h2>16,700</h2>
              </div>
            </div>

            <div className="Name">
              <h2>Subscribers Gained</h2>
            </div>

            <div className="Line-Grapth">
              <Line
                className="Line-Grapth-Line"
                options={{
                  legend: { display: false },
                  elements: { point: { radius: 5 } },
                  scales: {
                    yAxes: [
                      {
                        ticks: { display: false },
                        gridLines: { display: false }
                      }
                    ],
                    xAxes: [
                      {
                        ticks: { display: false },
                        gridLines: { display: false }
                      }
                    ]
                  },
                  responsive: true
                }}
                data={this.state.SubscribersData}
              />
            </div>
          </div>

          <div className="Card">
            <div className="CardHeader">
              <div
                className="Icon"
                style={{ backgroundColor: "rgba(90, 105, 255, 0.25)" }}
              >
                <ChatBubbleOutlineRoundedIcon
                  style={{
                    color: "Red",
                    alignContent: "center",
                    fontSize: "30px",
                    paddingTop: "11px",
                    color: "rgba(90, 105, 255, 1)"
                  }}
                />
              </div>

              <div className="Ammount">
                <h2>6,325</h2>
              </div>
            </div>

            <div className="Name">
              <h2>Comments Received</h2>
            </div>

            <div className="Line-Grapth">
              <Line
                className="Line-Grapth-Line"
                options={{
                  legend: { display: false },
                  elements: { point: { radius: 5 } },
                  scales: {
                    yAxes: [
                      {
                        ticks: { display: false },
                        gridLines: { display: false }
                      }
                    ],
                    xAxes: [
                      {
                        ticks: { display: false },
                        gridLines: { display: false }
                      }
                    ]
                  },
                  responsive: true
                }}
                data={this.state.CommentsData}
              />
            </div>
          </div>

          <div className="Card">
            <div className="CardHeader">
              <div
                className="Icon"
                style={{ backgroundColor: "rgba(248,203, 83, 0.25)" }}
              >
                <PeopleOutlineIcon
                  style={{
                    color: "Red",
                    alignContent: "center",
                    fontSize: "35px",
                    paddingTop: "7px",
                    color: "rgba(248,203, 83, 1)"
                  }}
                />
              </div>

              <div className="Ammount">
                <h2>5,950</h2>
              </div>
            </div>

            <div className="Name">
              <h2>Average watch time</h2>
            </div>

            <div className="Line-Grapth">
              <Line
                className="Line-Grapth-Line"
                options={{
                  legend: { display: false },
                  elements: { point: { radius: 5 } },
                  scales: {
                    yAxes: [
                      {
                        ticks: { display: false },
                        gridLines: { display: false }
                      }
                    ],
                    xAxes: [
                      {
                        ticks: { display: false },
                        gridLines: { display: false }
                      }
                    ]
                  },
                  responsive: true
                }}
                data={this.state.WatchTimeData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
