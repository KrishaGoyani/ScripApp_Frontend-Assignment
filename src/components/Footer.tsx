import { ChevronDown } from "lucide-react";
import MaxwidthWrapper from "./MaxwidthWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <MaxwidthWrapper>
        <div className="footer1">
          <div className="footer-section subscribe">
            <h4 style={{ marginBottom: "2rem" }}>BE THE FIRST TO KNOW</h4>
            <p style={{ marginBottom: "3rem" }}>
              Sign up for updates from mettä muse.
            </p>
            <div className="subscribe-section">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="email-input"
              />
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
          <div
            className="footer-section contact"
            style={{ lineHeight: "200%" }}
          >
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4>CURRENCY</h4>
            <p>🇺🇸 USD</p>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <hr style={{ marginTop: "1rem" }}></hr>

        <div className="footer-section links" style={{ width: "100%" }}>
          <div className="footer2">
            <div className="metta">
              <h4 className="hide-on-sm">mettā muse</h4>
              <div className="footer-dropdown-option">
                <h4>mettā muse</h4>
                <ChevronDown style={{ width: "25px", height: "25px" }} />
              </div>
              <ul className="ql">
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Fund transfer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Artisans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Boutiques
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    EU Compliances Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="quick">
              <h4 className="hide-on-sm">QUICK LINKS</h4>
              <div className="footer-dropdown-option">
                <h4>QUICK LINKS</h4>
                <ChevronDown style={{ width: "25px", height: "25px" }} />
              </div>
              <ul className="ql">
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Orders & Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Join/Login as a Seller
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Payment & Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Return & Refunds
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Orders & Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="last">
              <h4 className="hide-on-sm">FOLLOW US</h4>
              <div className="footer-dropdown-option">
                <h4>FOLLOW US</h4>
                <ChevronDown style={{ width: "25px", height: "25px" }} />
              </div>
              <div className="follow hide-on-sm">
                <img src="/instagram.svg" style={{ width: 20 }} />
                <img src="/linkedin.svg" style={{ width: 20 }} />
              </div>
              <h4>mettā muse accept</h4>
              <div className="icons">
                <img
                  src="/download.png"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img
                  src="/mastercard.jpg"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img src="/paypal.png" style={{ width: 60, height: 40 }}></img>
                <img src="/amex.jpg" style={{ width: 60, height: 40 }}></img>
                <img src="/apple1.png" style={{ width: 60, height: 40 }}></img>
                <img src="/shoppay.png" style={{ width: 60, height: 40 }}></img>
              </div>
            </div>
          </div>
        </div>
      </MaxwidthWrapper>
    </footer>
  );
};

export default Footer;
