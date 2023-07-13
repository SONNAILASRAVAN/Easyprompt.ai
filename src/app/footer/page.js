"use client";
import React from "react";
import styles from "../../styles/footer.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
const Footer = () => {
  return (
    <Container>
      <div className={styles.mainfooter}>
        <div className={styles.footer_content}>
          <div>
            <Image
              src="/UseCaseImages/easyprompt-logo 2.png"
              alt="Profile pic"
              width={167.253}
              height={42.183}
            />
            <div>
              <label>
                Try easyprompt today and experience the power of AI writing for
                yourself. Sign up now and take advantage of our free trial
                offer.
              </label>
            </div>
          </div>
          <div className={styles.footerusefull}>
            <h4>Useful Links</h4>
            <div>
              <li>Home</li>
              <li>Use Cases</li>
              <li>Contact Us</li>
              <li>Free Trial</li>
            </div>
          </div>
          <div>
            <div className={styles.footerusefull}>
              <h4>Use Cases</h4>
              <div>
                <li>Blog Tool</li>
                <li>Writing Tool</li>
                <li>Posts & Caption </li>
                <li>Product Descriptions</li>
                <li>View All</li>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.footercontactus}>
              <h4>Contact us</h4>
              <div className={styles.footercontactusimg}>
                <div>
                  <Image
                    src="/UseCaseImages/fluent_mail-28-filled.svg"
                    alt="Profile pic"
                    width={23}
                    height={23}
                  />
                </div>
                <div>
                  <li>info@easyprompt.ai.</li>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className={styles.footerbuttom}>
           <div>

           </div>
           <div>
<h5>Copyright 2023, Easyprompt.ai All Rights Reserve</h5>
           </div>
         </div>
      </div>
    </Container>
  );
};

export default Footer;
