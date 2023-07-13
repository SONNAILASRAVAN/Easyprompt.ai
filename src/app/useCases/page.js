"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/usecase.module.css";
import { Accordion, Container } from "react-bootstrap";
import Footer from "../footer/page";
const usecaseweb = [
  {
    name: "Brand Name",
    p: "Let our AI tool suggest you some creative, unique & catchy names for your Brand or Business.",
    image: "/UseCaseImages/use_brand-name.svg",
    path: "/BrandName1",
  },
  {
    name: "Blog Ideas",
    p: "With our AI tool you can easily generate Blog Ideas & Create content that is SEO Optimized.",

    image: "/UseCaseImages/blog-ideas.svg",
    path: "/BrandName3",
  },
  {
    name: "Business ideas",
    p: "Use our AI tool to Find unique Start up & Business Ideas based on your Skill & Passion.",
    image: "/UseCaseImages/business-idea.svg",
    path: "/BrandName2",
  },

  {
    name: "Call To Action",
    p: "Let our AI create high converting & creative CTA's for your Ads, Posts, Landing Pages.",
    image: "/UseCaseImages/call-to-action.svg",
    path: "/BrandName4",
  },
  {
    name: "Copy Writing (AIDA & PAS)",
    p: "Our AI Copy writing feature can generate unique & catchy copies in AIDA & PAS format.",
    image: "/UseCaseImages/copy-writing.svg",
    path: "/BrandName5",
  },
  {
    name: "Cover Letter",
    p: "Use our AI tool to generate a Unique, Creative & Convincing cover letter for job applications.",
    image: "/UseCaseImages/cover-letter.svg",
    path: "/BrandName4",
  },

  {
    name: "Emails",
    p: "Use our AI tool to create some catchy emails for your marketing & sales in just seconds.",
    image: "/UseCaseImages/emails.svg",
    path: "/BrandName6",
  },
  {
    name: "Facebook, Twitter, LinkedIn Ads",
    p: "Create engaging and unique ad copy for Facebook, Twitter, LinkedIn, and other social media platforms.",
    image: "/UseCaseImages/facebook-ads.svg",
    path: "/BrandName7",
  },
  {
    name: "Google Search Ads",
    p: "Create engaging and responsive ad copy for your Google ads to increase engagement.",
    image: "/UseCaseImages/google-ads.svg",
    path: "/BrandName8",
  },
  {
    name: "Interview Questions",
    p: "With our AI tool prepare thoughtful & interesting questions for interviews, surveys & Podcasts.",
    image: "/UseCaseImages/interview-questions.svg",
    path: "/BrandName9",
  },
  {
    name: "Website Copies",
    p: "Use our AI tool to generate creative copies for sections of your landing page in order to improve your conversions.",
    image: "/UseCaseImages/website-copies.svg",
    path: "/BrandName10",
  },
  {
    name: "Posts & Captions",
    p: "With the help of our AI tool come up with question & answers for your Organisation & Quora.",
    image: "/UseCaseImages/posts-captions.svg",
    path: "/BrandName11",
  },
  {
    name: "Product Description & Bullet Points",
    p: " Generate compelling product descriptions to increase customer engagement & conversions.",
    image: "/UseCaseImages/product-description.svg",
    path: "/BrandName10",
  },
  {
    name: "Question & Answers (Q&A)",
    p: " With the help of our AI tool come up with question & answers for your Organisation & Quora.",
    image: "/UseCaseImages/qanda.svg",
    path: "/BrandName11",
  },
  {
    name: "Reviews & Messages Replies",
    p: "Let our AI tool create intelligent and interesting answers to testimonials, private messages, business emails..",
    image: "/UseCaseImages/reviews-replies.svg",
    path: "/BrandName12",
  },
  {
    name: "SEO Meta Title & Description",
    p: "Let our AI tool suggest you some creative, unique & catchy names for your Brand or Business.",
    image: "/UseCaseImages/seo-meta.svg",
    path: "/BrandName9",
  },
  {
    name: "Story Telling",
    p: "Become a great storyteller With the help of our AI tool you can qucikly generate creative & engaging stories.",
    image: "/UseCaseImages/story-telling.svg",
    path: "/BrandName10",
  },
  {
    name: "Testimonials & Reviews",
    p: "Use our AI tool you can Quickly write candid testimonials and reviews for people and services.",
    image: "/UseCaseImages/testimonals.svg",
    path: "/BrandName11",
  },
  {
    name: "News Letters",
    p: "Use our AI tool to generate catchy & impressive newsletters that your audience will love to subscribe.",
    image: "/UseCaseImages/news-letters.svg",
    path: "/BrandName12",
  },
  {
    name: "YouTube Tools",
    p: " Use our AI tool to generate engaging YouTube video ideas & descriptions for your video to hook your subscribers and audience.",
    image: "/UseCaseImages/use_brand-name.svg",
    path: "/BrandName9",
  },
];

const UseCase = () => {
  return (
    <>
      <container>
        <div className={styles.main_container}>
          <div>
            <h1>Use Cases</h1>
            <p>
              Explore the vast number of use cases specifically designed for you
            </p>
          </div>
          <div>
            <Image
              src="/UseCaseImages/Banner-image 2.png"
              alt="Profile pic"
              width={591}
              height={323}
            />
          </div>
        </div>
        <div className={styles.we_provide}>
          <div>
            <h2>Use case we provide</h2>
          </div>
          <div>
            <h2>
              Our purpose is to Deliver Excellence in Services and Streamline
              Content Creation
            </h2>
          </div>
          <section className={styles.usercards_maincontent}>
            {usecaseweb.map((user, index) => (
              <div className={styles.usecards_main} key={index}>
                <div>
                  <Image
                    src={user.image}
                    alt="Profile pic"
                    width={90}
                    height={88}
                  />
                </div>
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.p}</p>
                  <Link href={user.path}>
                    <span>READ MORE</span>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className={styles.why_choose_us}>
          <div>
            <Image
              src="/UseCaseImages/home-why-choose-us-image 1.png"
              alt="Profile pic"
              width={740.372}
              height={582.613}
            />
          </div>
          <div>
            <h6>WHY CHOOSE US</h6>
            <h2>Get Closer Look How Business Develop in AI Data Analysis</h2>
            <p>
              Our platform is designed to be user-friendly and intuitive, so you
              don&apos;t need to be a professional writer or have any technical
              expertise to use it. Simply input your topic, and Easyprompt will
              do the rest.
            </p>
            <ul>
              <li>AI-Powered Technology</li>
              <li>Easy To Use</li>
              <li>Cost Effective</li>
              <li>Personalized Dashboard</li>
              <li>SEO Optimized Content</li>
              <li>75+ Languages Supported</li>
            </ul>
          </div>
        </div>
        <div className={styles.usecase_faq}>
          <div>
            <h6>FAQ&apos;S</h6>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div>
            <h2>Need any Help!</h2>
            <p>
              Have any questions? Need more Help ? We are always here to help
              you. Submit the simple forum below, We&apos;ll get back to you
            </p>
          </div>
        </div>
      </container>
      <Footer />
    </>
  );
};
export default UseCase;
