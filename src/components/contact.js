import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import 'materialize-css';

const Contact = () => {

  const [feedback, setFeedback] = useState({first_name:'', last_name:'', email:'',
      problem_1: false, problem_2: false, problem_3: false, problem_4: false, feedback:'',}
    );

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      navigate('/home')
  };

  return (
      <div class = "row">
          <form class = "col s12"
              onSubmit={handleSubmit}>
              <div className="input-field col s6">
                  <label>First Name</label>
                  <input
                      type="text"
                      required
                      class="validate"
                      onChange={
                      (e) => {{feedback.first_name = e.target.value;}}
                      }
                  />
              </div>

              <div className="input-field col s6">
                  <label>Last Name</label>
                  <input
                      type="text"
                      required
                      class="validate"
                      onChange={
                          (e) => {{feedback.last_name = e.target.value;}}
                      }
                  />
              </div>

              <div class = "input-field col s12">
                  <label>Email</label>
                  <input
                      type="email"
                      class="validate"
                      onChange={(e) => {{feedback.email = e.target.value;}}}
                  />
              </div>

              <p align="left" padding-left="5%">
                  Select an option which applies to your feedback:
              </p>

              <p align="left" padding-left="5%">
                  <label>
                      <input type="checkbox"
                             onChange={(e) => {{feedback.problem_1 = true}}}
                      />
                      <span>Prodcut or service support</span>
                  </label>
              </p>

              <p align="left" padding-left="5%">
                  <label>
                      <input type="checkbox"
                             onChange={(e) => {{feedback.problem_2 = true}}}
                      />
                      <span>Shipping issue</span>
                  </label>
              </p>

              <p align="left" padding-left="5%">
                  <label>
                      <input type="checkbox"
                             onChange={(e) => {{feedback.problem_3 = true}}}
                      />
                      <span>Payment issue</span>
                  </label>
              </p>

              <p align="left" padding-left="5%">
                  <label>
                      <input type="checkbox"
                             onChange={(e) => {{feedback.problem_4 = true}}}
                      />
                      <span>General feedback</span>
                  </label>
              </p>

              <div class = "input-field col s12">
                  <label>Feedback</label>
                  <input
                      type="text"
                      class="validate"
                      required
                      placeholder="Please explain your problem here"
                      onChange={(e) => {{feedback.feedback = e.target.value;}}}
                  />
              </div>

              <button className="btn waves-effect waves-light" type="Submit" name="action">Submit feedback
                  <i className="material-icons right">send</i>
              </button>

          </form>
      </div>
  );
};
  
export default Contact;