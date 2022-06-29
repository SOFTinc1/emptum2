import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import HomepageBanner from "../../components/hompage-banner/homepage-banner.component";
// import HomepageBanner from "../../components/homepage-banner/homapage-banner.component";
// import HorizontalScroll from "react-scroll-horizontal";

const Homepage = () => (
  <div className="homepage">
    <HomepageBanner />
    <Directory />
  </div>
);

// class Homepage extends Component {
//   render() {
//     const child = { width: `30em`, height: `100%` };
//     const parent = { width: `60em`, height: `100%` };
//     return (
//       <div className="homepage" style={parent}>
//         <HorizontalScroll>
//           <HomepageBanner2 style={child} />
//           <Directory style={child} />
//         </HorizontalScroll>
//       </div>
//     );
//   }
// }

export default Homepage;
