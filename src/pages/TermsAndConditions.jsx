import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="m-4 md:m-10 relative">
      <Link to="/" className="flex items-center text-blue-gray-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </Link>
      <div>
        <h1 className="text-2xl md:text-4xl text-primary font-bold mb-4 px-4 md:px-10">
          Terms & Conditions
        </h1>
      </div>
      <div className="rounded-lg bg-white px-4 md:px-20 py-8">
        <div className="overflow-auto text-blue-gray-600 text-base md:text-lg px-4 md:px-10">
          <p>
            1. Quality Standards: Lalan Rubbers maintains stringent quality
            standards for latex collection. Latex collected must meet the
            specified quality criteria to ensure optimal performance and
            customer satisfaction.
          </p>
          <p>
            2. VFA Measurement: The VFA measurement is a critical indicator of
            latex quality. Latex samples will be tested for VFA content upon
            collection.
          </p>
          <p>
            3. Consequences of High VFA Content: Latex samples with a VFA
            measurement above 0.04% may indicate lower quality and may require
            additional chemical treatment. Lalan Rubbers reserves the right to
            reject such samples or impose additional charges for processing.
          </p>
          <p>
            4. Chemical Treatment: In cases where latex samples exhibit high VFA
            content, Lalan Rubbers may apply chemical treatments to improve
            quality. Additional charges may apply for chemical treatments.
          </p>
          <p>
            5. Client Notification: Clients will be promptly notified of any
            deviations from the specified quality standards, including high VFA
            content. Clear communication regarding quality issues and potential
            solutions will be maintained throughout the latex collection
            process.
          </p>
          <p>
            6. Compliance with Regulations: All latex collection activities must
            comply with relevant regulatory requirements and industry standards.
            Lalan Rubbers is committed to environmentally responsible practices
            and will ensure compliance with all applicable laws and regulations.
          </p>
          <p>
            7. Dispute Resolution: In the event of disputes regarding latex
            quality or any other related matters, both parties agree to resolve
            the issue amicably through mutual discussions and negotiations.
          </p>
          <p>
            8. Modification of Terms: Lalan Rubbers reserves the right to modify
            these terms and conditions as necessary to adapt to changing
            circumstances or regulatory requirements. Clients will be duly
            informed of any modifications to the terms and conditions.
          </p>
          <p>
            9. Acceptance of Terms: By engaging in latex collection services
            provided by Lalan Rubbers, clients acknowledge and accept these
            terms and conditions in their entirety.
          </p>
          <p>
            10. Contact Information: For inquiries or further information
            regarding these terms and conditions, please contact Lalan Rubbers
            at [contact information].
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
