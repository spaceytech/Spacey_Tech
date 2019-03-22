const welcome = name => {
  return `
<div class="email__background" style="padding: 10px;">
  <div class="pre-header">
    <p style="font-size: 1px;color: white;">Book a task or choose to become a tasker (https://www.spaceytech.com/become_tasker)</p>
  </div>
  <div class="email__container" style="margin: 0 auto;max-width: 700px;">
    <a href="#" class="logo" style="text-decoration: none;align-self: start;color: var(--light-grey);font-family: &quot;Ubuntu&quot;, sans-serif;">
      <h2>
        spacey<span style="color: #00bc87;font-size: 20px;">.</span>
       </h2>
    </a>
    <h1 style="font-family: &quot;Ubuntu&quot;, sans-serif;text-align: center;">Welcome to Spacey</h1>
    <a href="#" class="button" style="text-decoration: none;"><div style="padding: 20px 25px;background: #00bc87;border: #00bc87;color: white;font-size: 15px;border-radius: 5px;font-family: &quot;Ubuntu&quot;, sans-serif;margin: 0 auto;text-align: center;width: 40%;">Confirm your email</div></a>
    <div class="email__container--body" style="border-top: 1px solid lightgrey;border-bottom: 1px solid lightgrey;padding: 10px 0;margin: 30px 0;font-size: 20px;font-family: &quot;Ubuntu&quot;, sans-serif;">
      <p>Hello</p>
    <p>Your new Spacey account is all set up and you're ready to start booking tasks or registering as a tasker yourself - just quickly confirm your email address using the button above. </p>
    </div>
    <div class="email__container--footer">
      <ul style="width: 100%;margin: 0 auto;list-style: none;font-family: &quot;Lato&quot;, sans-serif;text-align: center;">
        <li style="display: inline-block;margin-right: 20px;border-right: 1px solid #000;padding-right: 10px;color: #00bc87;font-weight: 700;">spaceytech.com</li>
        <li style="display: inline-block;margin-right: 20px;border-right: 1px solid #000;padding-right: 10px;color: #00bc87;font-weight: 700;">Privacy policy</li>
        <li style="display: inline-block;">&copy; 2019 Spacey</li>
      </ul>
    </div>
  </div>
</div>`;
};

module.exports = { welcome };
