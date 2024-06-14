import React from 'react'

function Topbar() {
  return (
    <div>
         <div className="topbar">
      <div className="container-fluid">
        <div className="topbar__inner">
          <ul className="list-unstyled topbar__info">
            <li>
              <span className="topbar__info__icon">
                <i className="icon-mail-1" />
              </span>
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
            <li>
              <span className="topbar__info__icon topbar__info__icon--phone">
                <i className="icon-headset" />
              </span>
              <a href="tel:16205">16205</a>
            </li>
          </ul>{/* /.list-unstyled topbar__info */}
          <div className="topbar__right">
            <ul className="list-unstyled topbar__pages">
              <li><a href="login.html">log in</a></li>
              <li><a href="about.html">career</a></li>
              <li><a href="about.html">media</a></li>
              <li><a href="faq.html">Faq’s</a></li>
            </ul>{/* /.topbar__pages */}
            <div className="topbar__social">
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com">
                <i className="fab fa-linkedin-in" aria-hidden="true" />
                <span className="sr-only">Linkedin</span>
              </a>
              <a href="https://youtube.com">
                <i className="fab fa-youtube" aria-hidden="true" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>{/* /.topbar__social */}
          </div>{/* /.list-unstyled topbar__right */}
        </div>{/* /.topbar__inner */}
      </div>{/* /.container-fluid */}
    </div>{/* /.topbar */}
      
    </div>
  )
}

export default Topbar
