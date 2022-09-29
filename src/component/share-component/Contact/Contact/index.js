import React from "react";

const index = () => {
  return (
    <>
      <section className="section_padding">
        <form action="#">
          <div className="container">
            <div className="SectionTitle">
              <div className="section_title">
                <h2>Send us a message</h2>
                <p>
                  When unknow printer took a gallery of type and scramblted it
                  to make a type specimen book
                </p>
              </div>
            </div>
            <div className="firstName">
              <div className="form_group">
                <input
                  name="first_name"
                  type="text"
                  className="form_control"
                  placeholder="First name"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="LastName">
              <div className="form_group">
                <input
                  name="last_name"
                  type="text"
                  className="form_control"
                  placeholder="Last name"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="EmailAdresse">
              <div className="form_group">
                <input
                  name="email_address"
                  type="email"
                  className="form_control"
                  placeholder="Email"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="PhoneNumber">
              <div className="form_group">
                <input
                  name="phone_number"
                  type="number"
                  className="form_control"
                  placeholder="Phone"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="ProjectTitle">
              <div className="form_group">
                <input
                  name="project_title"
                  type="text"
                  className="form_control"
                  placeholder="Project Title"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="SelectedOption">
              <div className="form_group">
                <select name="selected_option">
                  <option value="">Choose Service</option>
                  <option value="design">Web &amp; Graphic Design</option>
                  <option value="development">Apps And Web Development</option>
                  <option value="marketing">SEO and marketing</option>
                </select>
              </div>
            </div>
            <div className="UserMessage">
              <div className="form_group">
                <textarea
                  name="user_message"
                  className="form_control"
                  placeholder="Your Message"
                  required=""
                ></textarea>
                <div className="button_box">
                  <button className="deneb_btn">Submit Now</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default index;
