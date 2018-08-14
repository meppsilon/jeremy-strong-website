import React, { Component } from 'react';

const mailChimpForm = `
<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
  /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
     We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://plugbeta.us15.list-manage.com/subscribe/post?u=2b4fee385cb186e22231b3e37&amp;id=1755a81ee0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
  <label for="mce-EMAIL">Subscribe to our mailing list</label>
  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2b4fee385cb186e22231b3e37_1755a81ee0" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
`;

class EmailBanner extends Component {
  state = {
    email: '',
  };

  handleSubmit = () => {
    console.log('submit', this.state);
  };

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { email } = this.state;
    return (
      <div id="email-banner" className="my-6">
        <div id="mc_embed_signup">
          <form
            action="https://plugbeta.us15.list-manage.com/subscribe/post?u=2b4fee385cb186e22231b3e37&amp;id=1755a81ee0"
            method="post"
          >
            <div
              id="mc_embed_signup_scroll"
              className="flex items-center justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="Email address"
                className="p-4 border-2 border-white font-semibold"
                required
              />
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_2b4fee385cb186e22231b3e37_1755a81ee0"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div className="clear ml-4">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="bg-black-true border-2 border-white button px-6 py-4 text-white font-semibold"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EmailBanner;
