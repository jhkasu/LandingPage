export const metadata = { title: 'Privacy Policy — AUTOPRIME' }

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '860px', margin: '0 auto', padding: '60px 32px 80px', color: '#333' }}>
      <style>{`
        [data-custom-class='title'], [data-custom-class='title'] * { font-size: 26px !important; color: #000 !important; }
        [data-custom-class='subtitle'], [data-custom-class='subtitle'] * { color: #595959 !important; font-size: 14px !important; }
        [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-size: 19px !important; color: #000 !important; }
        [data-custom-class='heading_2'], [data-custom-class='heading_2'] * { font-size: 17px !important; color: #000 !important; }
        [data-custom-class='body_text'], [data-custom-class='body_text'] * { color: #595959 !important; font-size: 14px !important; }
        [data-custom-class='link'], [data-custom-class='link'] * { color: #3030F1 !important; font-size: 14px !important; word-break: break-word !important; }
        h1, h2, h3 { margin-top: 1.5em; margin-bottom: 0.5em; }
        table { border-collapse: collapse; width: 100%; margin: 1em 0; }
        td, th { padding: 8px 12px; font-size: 14px; }
        ul { padding-left: 1.5em; }
        li { margin-bottom: 4px; }
        a { color: #0D1B2A; }
        .back-link { display: inline-block; margin-bottom: 40px; color: #0D1B2A; font-size: 14px; font-weight: bold; text-decoration: none; }
        .back-link:hover { text-decoration: underline; }
      `}</style>

      <a href="/" className="back-link">← Back to AUTOPRIME</a>

      <div data-custom-class="body">
        <div><strong><span style={{fontSize:'26px'}}><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></span></strong></div>
        <div><span style={{color:'rgb(127,127,127)'}}><strong><span style={{fontSize:'15px'}}><span data-custom-class="subtitle">Last updated April 10, 2026</span></span></strong></span></div>
        <div><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{color:'rgb(89,89,89)',fontSize:'15px'}}><span data-custom-class="body_text">This Privacy Notice for <strong>AutoPrime</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</span></span></div>
        <ul>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">Visit our website at <a href="https://landing-page-snowy-eta-95.vercel.app" target="_blank" data-custom-class="link">https://landing-page-snowy-eta-95.vercel.app</a> or any website of ours that links to this Privacy Notice</span></span></li>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">Engage with us in other related ways, including any marketing or events</span></span></li>
        </ul>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:autoprimeinc24@gmail.com" data-custom-class="link">autoprimeinc24@gmail.com</a>.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><strong><span style={{fontSize:'15px'}}><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
        <div style={{lineHeight:'1.5',fontSize:'15px'}}><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice. You can find more details by using the table of contents below.</em></strong></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text"><strong>What personal information do we process?</strong> We may process personal information depending on how you interact with us and the Services.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have organizational and technical processes in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="toc" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></div>
        {[
          ['#infocollect','1. WHAT INFORMATION DO WE COLLECT?'],
          ['#infouse','2. HOW DO WE PROCESS YOUR INFORMATION?'],
          ['#whoshare','3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'],
          ['#inforetain','4. HOW LONG DO WE KEEP YOUR INFORMATION?'],
          ['#infosafe','5. HOW DO WE KEEP YOUR INFORMATION SAFE?'],
          ['#infominors','6. DO WE COLLECT INFORMATION FROM MINORS?'],
          ['#privacyrights','7. WHAT ARE YOUR PRIVACY RIGHTS?'],
          ['#DNT','8. CONTROLS FOR DO-NOT-TRACK FEATURES'],
          ['#uslaws','9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?'],
          ['#policyupdates','10. DO WE MAKE UPDATES TO THIS NOTICE?'],
          ['#contact','11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'],
          ['#request','12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?'],
        ].map(([href, label]) => (
          <div key={href} style={{lineHeight:'1.5'}}><a href={href} style={{color:'rgb(0,58,250)',fontSize:'15px'}}>{label}</a></div>
        ))}

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="infocollect" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_2"><h3>Personal information you disclose to us</h3></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> We collect personal information that you provide to us.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, or otherwise when you contact us. The personal information we collect may include:</span></span></div>
        <ul>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}>names</span></li>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}>phone numbers</span></li>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}>email addresses</span></li>
        </ul>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><strong>Sensitive Information.</strong> We do not process sensitive information.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="infouse" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><strong>We process your personal information for the following reasons:</strong></span></span></div>
        <ul>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</span></li>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues.</span></li>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</span></li>
        </ul>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="whoshare" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> We may share information in specific situations described in this section.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text">We may need to share your personal information in the following situations:</span></span></div>
        <ul>
          <li data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></li>
        </ul>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="inforetain" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="infosafe" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. You should only access the Services within a secure environment.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="infominors" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>6. DO WE COLLECT INFORMATION FROM MINORS?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18. If we learn that personal information from users less than 18 years of age has been collected, we will take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:autoprimeinc24@gmail.com" data-custom-class="link">autoprimeinc24@gmail.com</a>.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="privacyrights" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>7. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text">If you have questions or comments about your privacy rights, you may email us at <a href="mailto:autoprimeinc24@gmail.com" data-custom-class="link">autoprimeinc24@gmail.com</a>.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="DNT" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="uslaws" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_2"><h3>Your Rights</h3></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text">You have rights under certain US state data protection laws. These rights include:</span></span></div>
        <ul>
          {[
            ['Right to know','whether or not we are processing your personal data'],
            ['Right to access','your personal data'],
            ['Right to correct','inaccuracies in your personal data'],
            ['Right to request','the deletion of your personal data'],
            ['Right to obtain a copy','of the personal data you previously shared with us'],
            ['Right to non-discrimination','for exercising your rights'],
            ['Right to opt out','of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling'],
          ].map(([right, desc]) => (
            <li key={right} data-custom-class="body_text" style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><strong>{right}</strong> {desc}</span></li>
          ))}
        </ul>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_2"><h3>How to Exercise Your Rights</h3></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">To exercise these rights, you can contact us by emailing us at <a href="mailto:autoprimeinc24@gmail.com" data-custom-class="link">autoprimeinc24@gmail.com</a>, or by referring to the contact details at the bottom of this document.</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_2"><h3>California "Shine The Light" Law</h3></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px'}}><span data-custom-class="body_text">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact details provided below.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="policyupdates" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>10. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text"><em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="contact" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">If you have questions or comments about this notice, you may contact us by post at:</span></span></div>
        <div style={{lineHeight:'1.5'}}><br/></div>
        <div style={{lineHeight:'1.5',fontSize:'15px',color:'rgb(89,89,89)'}}><strong>AutoPrime</strong></div>
        <div style={{lineHeight:'1.5',fontSize:'15px',color:'rgb(89,89,89)'}}>6281 Beach Blvd</div>
        <div style={{lineHeight:'1.5',fontSize:'15px',color:'rgb(89,89,89)'}}>Buena Park, CA 90621</div>
        <div style={{lineHeight:'1.5',fontSize:'15px',color:'rgb(89,89,89)'}}>United States</div>
        <div style={{lineHeight:'1.5',fontSize:'15px',color:'rgb(89,89,89)'}}><a href="mailto:autoprimeinc24@gmail.com">autoprimeinc24@gmail.com</a></div>

        <div style={{lineHeight:'1.5'}}><br/></div>
        <div id="request" style={{lineHeight:'1.5'}}><strong><span data-custom-class="heading_1"><h2>12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong></div>
        <div style={{lineHeight:'1.5'}}><span style={{fontSize:'15px',color:'rgb(89,89,89)'}}><span data-custom-class="body_text">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please email us at <a href="mailto:autoprimeinc24@gmail.com" data-custom-class="link">autoprimeinc24@gmail.com</a>.</span></span></div>
      </div>
    </div>
  )
}
