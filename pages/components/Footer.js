import React from "react";

export default function Footer() {
    return <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3> ASOSE</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
                    voluptatem.
                </p>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="#" className="fab fa-youtube" />
                    <a href="#" className="fab fa-instagram" />
                    <a href="#" className="fab fa-github" />
                </div>
            </div>
        </div>
        <div className="credit">
            {" "}
            created by <span>Coding Team @ SOSE sec 5</span> {" "}
        </div>
    </section>;
}
