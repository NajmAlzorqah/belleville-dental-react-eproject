import React from "react";
import useScrollAnimation from "../../Hooks/useScrollAnimation";
import "./PatientEducation.css"; // Import local CSS for component styling
import "../../Hooks/scrollAnimation.css"; // Import global scroll animation CSS
import toothBrushImage from "../../assets/tooth-brush.svg";
import teethImage from "../../assets/teeth.svg";
import starImage from "../../assets/star.svg";
import faceIconImage from "../../assets/face-icon.svg";

const PatientEducation = () => {
  useScrollAnimation(".delay", "show"); // Apply scroll animation to elements with .delay class
  useScrollAnimation(".opacity-element", "show-opacity"); // Apply opacity animation to elements with .opacity-element class
  useScrollAnimation(".hidden", "show"); // Apply scroll animation to hidden elements

  return (
    <section id="patient-education">
      <div className="patient-education-intro">
        <div className="intro-text opacity-element hidden">
          <h1>Dental Health: The Foundation of Overall Well-being</h1>
          <p>
            Maintaining good dental health is essential for your overall
            physical and emotional well-being. Regular check-ups and proper oral
            hygiene can help prevent a range of issues and enable you to smile
            with confidence.
          </p>
        </div>
      </div>
      <div className="secondary-intro">
        <h1 className="opacity-element hidden">
          The Importance of Regular Dental Check-ups
        </h1>
        <div className="sub-intro">
          <div className="intro-container delay hidden">
            <h3>Early Detection</h3>
            <p>
              Regular dental visits allow your dentist to catch any problems
              early, when they are easier and less expensive to treat.
            </p>
          </div>

          <div className="intro-container delay hidden">
            <h3>Preventive Care</h3>
            <p>
              Routine cleanings and examinations help prevent the development of
              cavities, gum disease, and other oral health issues.
            </p>
          </div>

          <div className="intro-container delay hidden">
            <h3>Personalized Guidance</h3>
            <p>
              Your dentist can provide tailored advice on the best oral hygiene
              techniques and products for your unique needs.
            </p>
          </div>
        </div>
      </div>
      <div className="third-intro">
        <h1 className="opacity-element hidden">
          Proper Oral Hygiene Techniques
        </h1>
        <div className="sub-intro">
          <div className="intro-container delay hidden">
            <img src={toothBrushImage} alt="Tooth Brush" />
            <h3>Brushing</h3>
            <p>
              Brush your teeth twice a day for 2 minutes each time using a
              soft-bristled toothbrush and fluoride toothpaste.
            </p>
          </div>

          <div className="intro-container delay hidden">
            <img src={teethImage} alt="Teeth" />
            <h3>Flossing</h3>
            <p>
              Floss once a day to remove plaque and food particles from between
              teeth.
            </p>
          </div>

          <div className="intro-container delay hidden">
            <img src={starImage} alt="Star" />
            <h3>Rinsing</h3>
            <p>
              Use an antimicrobial mouthwash to help kill bacteria and prevent
              gum disease.
            </p>
          </div>

          <div className="intro-container delay hidden">
            <img src={faceIconImage} alt="Face Icon" />
            <h3>Tongue Cleaning</h3>
            <p>
              Gently clean your tongue to remove bacteria and freshen your
              breath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientEducation;
