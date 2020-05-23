import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-167426523-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-167426523-1');`,
          }}
        ></script>

        <title>Sell Your House for Cash in Lincoln, NE</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="We buy homes for cash in Lincoln and surrounding areas. Receive a cash offer for your home."
        />
        <meta
          property="og:site_name"
          content="Sell Your House for Cash in Lincoln, NE"
        />
        <meta
          property="og:title"
          content="Sell Your House for Cash in Lincoln, NE"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We buy homes for cash in Lincoln and surrounding areas. Receive a cash offer for your home."
        />
        <meta
          property="og:image"
          content="https://buyhomesinlincoln.carrd.co/assets/images/card.jpg?v02891116710951"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="800" />
        <meta property="og:url" content="https://sellyourhomeinlincoln.com" />
        <meta property="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:700,700italic,400,400italic,900,900italic%7CRoboto:500,500italic,700,700italic,900,900italic%7CSource+Sans+Pro:700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <section id="home-section" className="active">
              <div id="container01" className="container columns">
                <div className="inner">
                  <div>
                    <h2 id="text04">
                      Sell Your House for{" "}
                      <span style={{ color: "#2D3748" }}>Cash</span>
                    </h2>
                    <h3 id="text03">Sell your house fast in Lincoln, NE</h3>
                    <p id="text05">
                      <span>We'll buy your house:</span>
                      <br />{" "}
                      <span className="li">
                        <strong>"As Is"</strong> - Don't worry about costly
                        repairs or cleaning.
                      </span>
                      <span className="li">
                        <strong>For Cash</strong> - Close on a schedule that
                        works for you.
                      </span>
                      <span className="li">
                        <strong>No Fees</strong> - We cover <strong>all</strong>{" "}
                        costs for closing.
                      </span>
                      <br />{" "}
                      <span>
                        Why us? We <strong>live in</strong> and are dedicated to
                        investing in Lincoln.
                      </span>
                    </p>
                  </div>
                  <div>
                    <h2 id="text06">Get Your Cash Offer</h2>
                    <p id="text02">
                      Provide your details below to receive an offer
                    </p>
                    <form
                      id="form01"
                      action="https://getform.io/f/02de2eb0-c11b-49ba-8d14-ec7ca794218b"
                      method="POST"
                    >
                      <div className="inner">
                        <div className="field">
                          <input
                            type="text"
                            name="name"
                            id="form01-name"
                            placeholder="Name"
                            maxLength="128"
                            required=""
                          />
                        </div>
                        <div className="field">
                          <input
                            type="text"
                            name="phone"
                            id="form01-phone"
                            placeholder="Phone Number"
                            maxLength="128"
                            required=""
                          />
                        </div>
                        <div className="field">
                          <input
                            type="text"
                            name="address"
                            id="form01-address"
                            placeholder="Property Address"
                            maxLength="128"
                            required=""
                          />
                        </div>
                        <div className="field">
                          <input
                            type="text"
                            name="asking"
                            id="form01-asking"
                            placeholder="Asking Price? (optional)"
                            maxLength="128"
                          />
                        </div>
                        <div className="actions">
                          <button type="submit">Get Your Offer</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="container04" className="container columns">
                <div className="inner">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </section>
            <section
              id="done-section"
              className="inactive"
              style={{ display: "none" }}
            >
              <div id="container03" className="container default">
                <div className="inner">
                  <h2 id="text08">Thank you!</h2>
                  <p id="text09">
                    Someone will be in contact with you shortly!
                  </p>
                  <ul id="buttons02" className="buttons">
                    <li>
                      <a href="#home" className="button n01">
                        Okay
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
