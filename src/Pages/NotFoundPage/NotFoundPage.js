import React from "react";
import './style.css'

export default function NotFoundPage() {
  return (
    <div className="container main">
      <div>
        <div>
          <div>
            <h3>
              We are sorry, but the page you are looking for cannot be found.
            </h3>
          </div>
          <div>
            <ul>
              <li>
                If you typed the URL directly, please make sure the spelling is
                correct.
              </li>
              <li>
                If you clicked on a link to get here, we must have moved the
                content.
              </li>
              <li>
                Please try our store search box above to search for an item.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
