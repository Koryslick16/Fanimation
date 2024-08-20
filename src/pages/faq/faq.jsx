import React, { useState } from 'react';
import './faq.css';
import { useForm } from "react-hook-form";

const FAQ = () => {
  const [open, setOpen] = useState({});

  const toggleAccordion = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Your Request was successfully submitted!");
  };

  return (
    <div className="cont">
      <div className="faqbanner">
        <div className="faqbannertext">
          <span>Need Help?</span>
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="ask">
        <div className="ask1">
          <p>
            These frequently asked questions and answers are geared toward the end user.
            For showroom-specific questions, <b>Contact Fanimation</b> directly.
          </p>
        </div>
      </div>

      {/* General Questions Section */}
      <div className="faqGeneral">
        <div className="faqGeneral1">
          <h2 className='questiontxt'>GENERAL QUESTIONS</h2>
          <div className="accordion">
            {faqData.general.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <input type="checkbox" id={`accordionGeneral${index + 1}`} className="accordion-checkbox" />
                <label
                  htmlFor={`accordionGeneral${index + 1}`}
                  className="accordion-header"
                  onClick={() => toggleAccordion(`general${index + 1}`)}
                >
                  {faq.question}
                  <span className="accordion-icon">{open[`general${index + 1}`] ? '−' : '+'}</span>
                </label>
                {open[`general${index + 1}`] && (
                  <div className="accordion-content">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Questions Section */}
      <div className="faqGeneral">
        <div className="faqGeneral1">
          <h2 className='questiontxt'>TROUBLESHOOTING</h2>
          <div className="accordion">
            {faqData.technical.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <input type="checkbox" id={`accordionTechnical${index + 1}`} className="accordion-checkbox" />
                <label
                  htmlFor={`accordionTechnical${index + 1}`}
                  className="accordion-header"
                  onClick={() => toggleAccordion(`technical${index + 1}`)}
                >
                  {faq.question}
                  <span className="accordion-icon">{open[`technical${index + 1}`] ? '−' : '+'}</span>
                </label>
                {open[`technical${index + 1}`] && (
                  <div className="accordion-content">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="contactinfo">
        <div className="contactinfo-header">
            <h1 className='contactinfo-headertext'>Questions? Contact tech support</h1>
        </div>
        <div className="subheader">
            <h3>GENERAL INFORMATION</h3>
        </div>
        <div className="agreement">
            <span className='gre' onSubmit={handleSubmit(onSubmit)}>
            <p>By providing my phone number to FANIMATION I agree and acknowledge that FANIMATION 
                may send text messages to my wireless phone number for any purpose.
                Message and data frequency will vary, and you will be able to Opt-out by replying 'STOP'.
                for more information on how your data will be handled, please visit the privacy policy linked below
            </p>
            </span>
          </div>
        <div className="contentheader">
            <div className="contentinfo">

            <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName" className='label'>Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='First'
          {...register("fullName", { required: true})}
        />
        {errors.fullName && <span className='notice'> {"Name cannot be empty"}</span>}
      </div>

      <div>
        <label htmlFor="fullName" className='label'></label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='Last'
          {...register("fullName", { required: true})}
        />
        {errors.fullName && <span className='notice'> {"LastName cannot be empty"}</span>}
      </div>

      <div>
        <label htmlFor="modelOrProduct" className='label'>Model Number or Product Name</label>
        <input
          type="text"
          id="modelOrProduct"
          name="modelOrProduct"
          {...register("modelOrProduct", {
            required: "Model Number or Product Name is required",
            pattern: {
              value: /^[A-Za-z0-9 ]{3,50}$/,
              message:
                "Model Number or Product Name must be alphanumeric and 3-50 characters long",
            },
          })}
        />
        {errors.modelOrProduct && (
          <span className='notice'>{errors.modelOrProduct.message}</span>
        )}
      </div>

      <div className="checkbox-wrapper-46">
                <input type="checkbox" id="cbx-46" className="inp-cbx"  {...register("checkbox", { required: true})}/>
                <label htmlFor="cbx-46" className="cbx"
                    ><span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
                    ><span>I agree with the privacy policy</span>
                </label>
                </div>
                <div>
                    <button type="submit" className='serve'>Submit</button>
                </div>
    </form>
            </div>
            <div className="contentinfo">

            <form >

      <div>
        <label htmlFor="email" className='label'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            required: "Email cannot be empty",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <span className='notice'>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="dateCode" className='label'>Date Code</label>
        <input
          type="text"
          id="dateCode"
          name="dateCode"
          {...register("dateCode", { required: "Date Code is required" })}
        />
        {errors.dateCode && <span className='notice'>{errors.dateCode.message}</span>}
        <p className='novice'>
          Please provide your product’s date code. This code will help us provide the most accurate assistance in resolving your product issue. The date code can be found in one of the following locations:
          <ul>
            <li>-On the back of the battery compartment cover of your handheld remote control.</li>
            <li>-On your fan’s motor housing.</li>
            <li>-On the original product packaging.</li>
            <li>-On the side of wall controls and wall remotes.</li>
          </ul>
        </p>
      </div>
    </form>

            </div>
            <div className="contentinfo">
                <form onSubmit={handleSubmit(onSubmit)} className='form1'>
                <div>
        <label htmlFor="phoneNumber" className='label'>Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          {...register("phoneNumber", {
            required: "Phone Number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Phone Number must be exactly 10 digits",
            },
          })}
        />
        {errors.phoneNumber && <span className='notice'>{errors.phoneNumber.message}</span>}
      </div>
      <div>
        <label htmlFor="productInquiry">Select Product Inquiry</label>
        <select
          id="productInquiry"
          name="productInquiry"
          {...register("productInquiry", { required: "Please select an issue" })}
        >
          <option value="">Please select an issue</option>
          <option value="warranty">Warranty Claim</option>
          <option value="repair">Product Repair</option>
          <option value="technical">Technical Support</option>
        </select>
      </div>
    </form>
            </div>
        </div>
      </div>

      <div className="fade">
        <div className="textcontent1">Product warranties</div>
        <div className="textcontent2">
          <b>    
                  <big>LIMITED LIFETIME WARRANTY</big><br />
                  Extends to the original purchaser of a Fanimation Fan
          </b>
          <br /><br />
          <p>

            1. <b>Limited Lifetime Motor Warranty:</b> <br />
                  <span className='read'>
                  If any part of your fan motor fails, due to a defect in materials or workmanship during the lifetime of the original purchaser, Fanimation will provide the replacement part free of charge, when the defective fan is returned to our national service center. Proof of purchase is required. Customer shall be responsible for all costs incurred in removal or reinstallation and shipping of the product for repairs or replacement.
                  </span>
            2. <b> One Year Motor Labor Warranty:</b><br />
                  <span className='read'>
                  If your fan motor fails at any time within one year from the original purchase, due to defects in materials or workmanship, labor to repair the motor will be provided free of charge at our national service center.  Purchaser will be responsible for labor charges after this one-year period. Customer shall be responsible for all costs incurred in the removal or reinstallation and shipping of the product for repairs or replacement.
                  </span>
            3. <b>If any other part of your fan fails at any time within one year after original purchase,</b> <br />
            <span className='read'>
            due to defect in materials or workmanship, we will repair or replace, at our option, the defective part free of charge for parts and labor performed at our national service center.
            </span>
            4. <b>Because of varying climate conditions, </b> 
            <span className='read'>
            this warranty does not cover changes in the finish, including rusting, pitting, corroding, tarnishing, or peeling.
            </span>
            5. <b>This warranty is void and does not apply to damage from improper installation,</b> 
            <span className='read'>
              neglect, accident, misuse, exposure to extremes of heat or humidity, or as a result of any modification to the original product.
            </span>
            6. <b>All costs of removal and reinstallation of the fan</b> 
            <span className='read'>are the sole responsibility of the owner of the fan and not the store that sold the fan or Fanimation.</span>
            7. <b> Fanimation reserves the right to modify or discontinue</b> <span className='read'>
            any product at any time and may substitute any part under this warranty.
            </span>
            8. <b>Under no circumstances may a fan be returned without prior authorization from Fanimation.</b>
            <span className='read'> The receipt of purchase must accompany authorized returns and must be sent freight prepaid to Fanimation. The fan to be returned must be properly packed to avoid damage in transit; Fanimation will not be responsible for any damage resulting for improper packaging.</span>
            9. <b>It is understood that any repair or replacement is the exclusive remedy available from Fanimation.</b> 
            <span className='read'>There is no other expressed or implied warranty. Fanimation hereby disclaims any and all implied warranties, including, but not limited to those of merchantability and fitness for a particular purpose to the extent permitted by law. Some states do not allow limitations or implied warranties. Fanimation will not be liable for incidental, consequential, or special damages arising out of or in conjunction with product use or performance, except as may otherwise be accorded by law. This warranty gives you special legal rights and you may also have other rights that vary from state to state.</span>
            10. <b>A certain amount of wobble is normal</b>
            <span className='read'> and should not be considered a problem or a defect.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const faqData = {
  general: [
    {
      question: "How does distance from the ceiling and walls affect a fan's performance?",
      answer: (
        <p>
          The distance from the ceiling and walls impacts how air Circulates.
          installing your Fanimation Ceiling Fan at the proper distances ensures optimal air distribution
          and prevents the fan from creating a vacuum effects, which may reduce efficiency and feel.
        </p>
      ),
    },
    {
      question: "Can I hang my fan on a Stopped Ceiling?",
      answer: (
        <p>
          In many cases, downrod mounted ceiling fans can be installed on ceilings with a slope of up to 19 degrees, We 
          recommend that you review your fan's specifications to confirm the maximum allowable slope.
          for some fans a sloped ceiling kit can be purchased to achieve a steeper slope than 19 degrees.
        </p>
      ),
    },
    {
        question: "What is the optimal distance from the ceiling and walls?",
        answer: (
          <p>
            <ul>
              <li>the Optimal clearance from the bottom of your ceiling fan's blades to the floor is 7-9 feet.
                This not only ensures compliance with safety codes, but also that maximum airflow is felt.
              </li>
              <li>for ceilings higher than 12 feet, hang your fan at least one-third 
                the distance to the floor while maintaining a minimum of 7 feet of clearance.
              </li>
              <li>Fanimation offers a wide selection of dowrods between 12 and 72 inches long.
                Downrods can be combined if necessary with the use of a dowrod coupler.
              </li>
              <li>A hugger fan should be installed with a ceiling height of 8 feet or less.</li>
              <li>Ensure at least 24 inches of clearance from all walls and/or their ceiling and eaves.</li>
            </ul>
          </p>
        ),
      },
      {
        question: "What is the difference between AC and DC ceiling fans?",
        answer: (
          <p>
            DC fans generate more power and torque than conventional AC ceiling fan motors while consuming around 70%
            less power. They are virtually silent and require less electrical current by utilizing and internal array 
            of magnets of opposing polarity.
            Many of our DC fans have earned the energy star, which will help with electrical costs.
            <br />
            
            While using slightly more energy compared to DC ceiling fan motors, 
            AC fan motors are generally less expensive, simpler and more reliable than their DC counterparts.          </p>
        ),
      },
      {
        question: "What type of location rating does the ceiling fan need?",
        answer: (
          <p>
            Fans are categorized into three different location ratings - Dry, Damp, and Wet.
            <ul>
              <li>Ceiling fans with a dry location rating are suitable for indoor inStallation only and should 
                not be installed in a high humidity environment such as a bathroom,
              </li>
              <li>Ceiling fans with a damp location rating be installed in any indoor setting or covered outdoor location
                rating can be installed in any indoor setting or covered outdoor locations such as covered porches.
              </li>
              <li>Ceiling fans with a wet location rating can be installed in any indoor or outdoor setting,
                including those where direct contact with water would be likely.
              </li>
            </ul>
          </p>
        ),
      },
      {
        question: "Are lightbulbs included with Fanimation light kits?",
        answer: (
          <p>
            Yes, bulbs or integrated LED modules are included with any light kit, depending on design.
          </p>
        ),
      },
      {
        question: "Where can I find the Owner's Manuel and Specification Sheets for my fan?",
        answer: (
          <p>
            Current Specialization sheets and owner's manuals are available under the Support Documents tab for each fan online at
            fanimation.com. Histrical fan information can be obtained by contacting Customer Care-888-567-2055 
            or <b>te********@fa********.com</b>
          </p>
        ),
      },
      {
        question: "What do the Icon mean on my remote Control?",
        answer: (
          <p>
            Please refer to our remote control features:
            <b>AC Remote Control | DC Remote Control</b>
          </p>
        ),
      },
    // Add more general questions here...
  ],
  technical: [
    {
      question: "Why do I not feel much air from my outdoor ceiling fan?",
      answer: (
        <p>
          Any Setting with no walls allow for air leakage. Ensure your fan is installed 7 feet from the ground and check that the airflow direction is blowing
          air downward-reverse your airflow direction if neccessary.

          <br />
          Choosing a fan with higher RPM Can also increase the feeling of air from your fan.
        </p>
      ),
    },
    {
      question: "Why is my fan and/or fan light turning on or off unexpectedly?",
      answer: (
        <div>
          <p>This is likely due to an interference issue with another RF remote product in or near your home.
            We recommend changing the dipswitch settings on your fan's receiver unit and corresponding remote control.
          </p>
        </div>
      ),
    },
    {
        question: "My fan is Woobling or making noise, What should i do?",
        answer: (
          <div>
            <ul>
              <li>Ensure all screws are properly tightened.</li>
              <li>Ensure that the fan-rated junction or outlet box is secured to the joist or block, and the hanger bracket is securely attached.</li>
              <li>Verify that the hanger ball is properly Seated in the provided hanger bracket.</li>
              <li>Verify proper installation of blades and blade holders.</li>
              <li>Confirm that all packaging motor stops have been removed.</li>
              <li>Ensure the light plate is not upside down (if included)</li>
            </ul>
          </div>
        ),
      },
  ]
};

export default FAQ;
