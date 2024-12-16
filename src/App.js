import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Elements/Headermain/header.jsx';
import Footer from './Components/Mainpages/Homepage/Footer/footer.jsx';
import Homepage from './Components/Mainpages/Homepage/homepage.jsx';
import Datascience from './Components/Mainpages/Datascience/datascience.jsx';
import FullStackWebDevelopment from './Components/Mainpages/Fullstack/fullstack.jsx';
import Digitalmarketing from "./Components/Mainpages/Digitalmarketing/digitalmarketing.jsx"
import Graphicdesigning from "./Components/Mainpages/Graphicdesigning/graphicdesigning.jsx"
// import BridgeCourses from './Mainpages/BridgeCourses';
// import MasterInternships from './Mainpages/MasterInternships';
// import MasterInternshipsDS from './Mainpages/MasterInternshipsDS';
// import AboutUs from './Mainpages/AboutUs';
// import ContactUs from './Mainpages/ContactUs';
// import HireFromUs from './Mainpages/HireFromUs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/programs/full-stack" element={<FullStackWebDevelopment />} />
          <Route path="/programs/data-science" element={<Datascience />} />
          <Route path="/programs/data-science" element={<Datascience />} />
          <Route path="/programs/digital-marketing" element={<Digitalmarketing />} />
          <Route path="/programs/graphic-designing" element={<Graphicdesigning />} />
          {/* <Route path="/programs/bridge-courses" element={<BridgeCourses />} /> */}
          {/* <Route path="/programs/master-internships" element={<MasterInternships />} /> */}
          {/* <Route path="/bridge-courses/web-basics" element={<BridgeCourses />} /> */}
          {/* <Route path="/bridge-courses/java" element={<BridgeCourses />} /> */}
          {/* <Route path="/bridge-courses/mysql" element={<BridgeCourses />} /> */}
          {/* <Route path="/bridge-courses/python" element={<BridgeCourses />} /> */}
          {/* <Route path="/bridge-courses/devops" element={<BridgeCourses />} /> */}
          {/* <Route path="/bridge-courses/aws" element={<BridgeCourses />} /> */}
          {/* <Route path="/master-internships/hrms" element={<MasterInternships />} /> */}
          {/* <Route path="/master-internships/crm" element={<MasterInternships />} /> */}
          {/* <Route path="/master-internships/social-media" element={<MasterInternships />} /> */}
          {/* <Route path="/master-internships/payroll" element={<MasterInternships />} /> */}
          {/* <Route path="/master-internships/ott" element={<MasterInternships />} /> */}
          {/* <Route path="/master-internships/ecommerce" element={<MasterInternships />} /> */}
          {/* <Route path="/ds-internships/chatgpt-text" element={<MasterInternshipsDS />} /> */}
          {/* <Route path="/ds-internships/chatgpt-image" element={<MasterInternshipsDS />} /> */}
          {/* <Route path="/ds-internships/chatgpt-speech" element={<MasterInternshipsDS />} /> */}
          {/* <Route path="/ds-internships/ats-tool" element={<MasterInternshipsDS />} /> */}
          {/* <Route path="/ds-internships/text-to-speech" element={<MasterInternshipsDS />} /> */}
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          {/* <Route path="/hire" element={<HireFromUs />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
























// import './App.css';
// // import Header from './Homepage/Header/header';
// import Header from './Components/Headermain/header';
// import Footer from './Homepage/Footer/footer';
// import Homepage from './Mainpages/Homepage';
// import Datascience from './Mainpages/Datascience';


// function App() {
//   return (
//     // <div className="App">

//     // </div>
//     <div>
//       <Header />
//       <Homepage />
//       {/* <Datascience /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

// // import React from 'react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import './App.css';
// // import Header from './Components/Headermain/header';
// // import Footer from './Components/Footermain/footer';
// // // import AppRoutes from './Routes/routes';
// // import Datascience from './Mainpages/Datascience';

// // function App() {
// //   return (
// //     // <Router>
// //       <div className="App">
// //         <Header />
// //         {/* <AppRoutes /> */}
// //         <Datascience />
// //         <Footer />
// //       </div>
// //     // {/* </Router> */}
// //   );
// // }

// // export default App;