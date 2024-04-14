import React from "react";
import Link from 'next/link'

export default function Footer() {
    return <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3> ASOSE</h3>
                <p>
                Our Social Media Handles :)
                </p>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="https://www.youtube.com/@asose.rpvvsec5official" target="_blank" className="fab fa-youtube" />
                    <a href="https://www.instagram.com/sose_rpvv_sec_5_dwarka" target="_blank" className="fab fa-instagram" />
                    <a href="#" className="fab fa-github" />
                </div>
            </div>
        </div>
        <div className="credit">
            {" "}
            created by <Link href='/about'><span>Coding Team @ SOSE sec 5</span></Link> {" "}
        </div>
    </section>;
}
