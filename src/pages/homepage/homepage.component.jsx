import React from "react";

import "./homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="card">
      <h1 className="content">TEN: A World of Knowledge at Your Fingertips</h1>
      <h2 className="content">
        This is a social media platform for the members of the TEN community
      </h2>
      <h2 className="content">
        <span className="individual">EXPERT TEACHERS:</span> Our instructors are
        more adept at monitoring student problems and assessing their level of
        understanding and progress, and they provide much more relevant, useful
        feedback. We are experts in developing and testing hypotheses about
        learning difficulties or instructional strategies.
      </h2>
      <h2 className="content">
        <span className="individual">FLEXIBLE CURRICULUM:</span> Our expert
        teachers design and curate the curriculum using best practices and
        careful consideration of how people learn and retain information with
        the ongoing tech trends in the professional domain. We've debated every
        facet of our methodology, from the order in which to teach concepts, the
        analogies used to clarify them and how exercises should be structured to
        deliver the maximum educational punch.
      </h2>
    </div>
  </div>
);

export default Homepage;
