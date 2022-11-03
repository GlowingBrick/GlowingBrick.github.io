const randRange = (min, max) => Math.random() * (max - min) + min;
const Hills = () => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "880px", height: "290px", className: "hill",

  viewBox: "0 0 600 200" },
React.createElement("path", { d: "M 10 190 Q 25 150 40 110 Q 70 80 110 80 Q 150 80 180 110 L 210 150 Q 250 140 290 180 C 310 170 340 200 360 180 L 390 140 Q 400 100 430 70 L 460 50 Q 470 10 610 0 Q 610 0 610 110 L 610 210 L 0 210 " }),

React.createElement("svg", { width: "200px", height: "95px", viewBox: "0 0 347.971 347.971" },
React.createElement("path", { d: "M340.114 140.296L173.994 0 7.857 140.296v31.017l25.674-.043v176.701h101.878v-99.446h77.139v99.446h101.88V171.27l25.686.043z" })),

React.createElement("svg", { className: "tree", width: "100", height: "120",
  viewBox: "0 0 590.074 590.073" },
React.createElement("path", { d: "M537.804 174.688c0-44.772-33.976-81.597-77.552-86.12-12.23-32.981-43.882-56.534-81.128-56.534-16.304 0-31.499 4.59-44.514 12.422C319.808 17.949 291.513 0 258.991 0c-43.117 0-78.776 31.556-85.393 72.809-3.519-.43-7.076-.727-10.71-.727-47.822 0-86.598 38.767-86.598 86.598 0 2.343.172 4.638.354 6.933-24.25 15.348-40.392 42.333-40.392 73.153 0 27.244 12.604 51.513 32.273 67.387-.086 1.559-.239 3.107-.239 4.686 0 47.822 38.767 86.598 86.598 86.598 14.334 0 27.817-3.538 39.723-9.696 16.495 11.848 40.115 26.67 51.551 23.715 0 0 4.255 65.905 3.337 82.64-1.75 31.843-11.303 67.291-18.025 95.979h104.117s-15.348-63.954-16.018-85.307c-.669-21.354 6.675-60.675 6.675-60.675l36.118-37.36c13.903 9.505 30.695 14.908 48.807 14.908 44.771 0 81.597-34.062 86.12-77.639 32.98-12.23 56.533-43.968 56.533-81.214 0-21.994-8.262-41.999-21.765-57.279 3.653-9.583 5.747-19.948 5.747-30.821zM214.611 373.444a86.984 86.984 0 0 0 17.212-22.969l17.002 35.62c-.009.001-9.256 4.084-34.214-12.651zm63.572 21.994c-8.798 1.597-23.782-25.494-34.416-47.517 11.791 6.015 25.102 9.477 39.254 9.477 3.634 0 7.201-.296 10.72-.736-2.735 17.624-7.554 37.313-15.558 38.776zm37.38 17.337c-20.35 5.651-8.167-36.501-2.334-60.904 4.218-1.568 8.301-3.413 12.183-5.604 2.343 17.786 10.069 33.832 21.516 46.521-9.917 8.809-21.335 17.204-31.365 19.987z" })));




const Sky = ({ stars }) => React.createElement("div", { className: "sky" },
React.createElement("svg", { viewBox: "0 0 600 600",
  xmlns: "http://www.w3.org/2000/svg" },

React.createElement("filter", { id: "blur" },
React.createElement("feGaussianBlur", { stdDeviation: "3" })),


[...Array(1000).keys()].map((star) =>
React.createElement("circle", { fill: "#fff", cx: randRange(0, 600), cy: randRange(0, 600), r: randRange(0.05, 1), style: {
    animation: `twinkle ${randRange(1, 20)}s ease-in-out infinite` } }))));







class App extends React.Component {
  render() {
    return React.createElement("div", { className: "container" }, React.createElement(Sky, null), React.createElement(Hills, null));
  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));