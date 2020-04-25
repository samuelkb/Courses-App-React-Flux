import React from "react";

class AboutPage extends React.Component {
  //Classes need just one required method: render
  render() {
    //We declare our JSX
    /*
    JSX is compiled down to function calls. You can
    only have one top-level function.

    React.Fragement allow us to wrap adjacent elements,
    but React won't render anything.
    React.Fragment == <> </>
    It is recommended to use <>, as an easy way anytime
    you have adjacent JSX elements
    */
    return (
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
    );
  }
}

export default AboutPage;
