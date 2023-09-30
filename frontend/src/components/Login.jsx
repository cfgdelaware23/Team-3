import React from 'react';

function Login() {
    const containerStyle = {
        background: 'lightgrey',
        clear: 'left',
        font: '18px Lato, sans-serif',
        width: '400px',
        margin: '150px auto 0', // Center the container horizontally
        padding: '50px', // Add space around the form
      };
      
      const fieldStyle = {
        marginBottom: '50px', // Add space below each field
      };

      const headingStyle = {
        fontSize: '24px', // Increase font size
        marginBottom: '20px', // Add space below the heading
      };
  return (
    
    <div id="mc_embed_signup" style={containerStyle}>
      <h1 style={headingStyle}>Login</h1>
      <form action="https://gmail.us21.list-manage.com/subscribe/post?u=7dd3948510ee387de6835404a&amp;id=e354b1bd98&amp;f_id=00f9e7e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
          <div className="indicates-required" style={fieldStyle}><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group" style={fieldStyle}>
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" />
          </div>
          <div className="mc-field-group" style={fieldStyle}>
            <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label>
            <input type="text" name="FNAME" className="required text" id="mce-FNAME" required="" value="" />
          </div>
          <div className="mc-field-group" style={fieldStyle}>
            <label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label>
            <input type="text" name="LNAME" className="required text" id="mce-LNAME" required="" value="" />
          </div>
          <div className="mc-field-group" style={fieldStyle}>
            <label htmlFor="mce-PHONE">Phone Number <span className="asterisk">*</span></label>
            <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" value="" />
          </div>
          <div id="mce-responses" className="clear foot" style={fieldStyle}>
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px', padding: '20px 10px'}}>
            <input type="text" name="b_7dd3948510ee387de6835404a_e354b1bd98" tabIndex="-1" value="" />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input type="submit" name="Login" id="mc-embedded-subscribe" className="button" value="Login" />
              <p style={{ margin: '0px auto' }}>
              </p>
            </div>
          </div>
        </div>
      </form>
      
    </div>
  );
}

export default Login;

