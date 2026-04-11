export const metadata = { title: 'Data Privacy Rights — AUTOPRIME' }

export default function DataPrivacyRights() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '860px', margin: '0 auto', padding: '60px 32px 80px', color: '#333' }}>
      <style>{`
        h1 { font-size: 26px; color: #000; }
        h2 { font-size: 19px; color: #000; margin-top: 2em; }
        h3 { font-size: 16px; color: #000; margin-top: 1.5em; }
        p, li { font-size: 14px; color: #595959; line-height: 1.7; }
        ul { padding-left: 1.5em; }
        li { margin-bottom: 6px; }
        a { color: #0D1B2A; }
        .back-link { display: inline-block; margin-bottom: 40px; color: #0D1B2A; font-size: 14px; font-weight: bold; text-decoration: none; }
        .back-link:hover { text-decoration: underline; }
        .subtitle { color: #595959; font-size: 14px; margin-bottom: 2em; }
        .highlight-box { background: #f9f9f9; border-left: 3px solid #0D1B2A; padding: 16px 20px; margin: 1.5em 0; border-radius: 4px; }
      `}</style>

      <a href="/" className="back-link">← Back to AUTOPRIME</a>

      <h1>DATA PRIVACY RIGHTS</h1>
      <p className="subtitle">Last updated April 10, 2026</p>

      <p>AutoPrime is committed to protecting your privacy and ensuring you can exercise your rights under applicable data protection laws, including the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).</p>

      <h2>YOUR RIGHTS AS A CALIFORNIA RESIDENT</h2>
      <p>If you are a California resident, you have the following rights regarding your personal information:</p>

      <h3>Right to Know</h3>
      <p>You have the right to request that we disclose what personal information we have collected about you, including the categories of information, the sources, the business purposes for collection, and any third parties with whom we share it.</p>

      <h3>Right to Access</h3>
      <p>You have the right to request a copy of the specific personal information we have collected about you over the past 12 months.</p>

      <h3>Right to Correct</h3>
      <p>You have the right to request that we correct inaccurate personal information we maintain about you.</p>

      <h3>Right to Delete</h3>
      <p>You have the right to request that we delete the personal information we have collected about you, subject to certain exceptions required by law.</p>

      <h3>Right to Opt Out of Sale or Sharing</h3>
      <p>AutoPrime does not sell or share your personal information with third parties for commercial purposes. You do not need to opt out.</p>

      <h3>Right to Non-Discrimination</h3>
      <p>We will not discriminate against you for exercising any of your privacy rights. We will not deny you services, charge different prices, or provide a different level of service based on your exercise of these rights.</p>

      <h2>WHAT INFORMATION WE COLLECT</h2>
      <p>When you use our vehicle appraisal form, we collect:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Vehicle information (VIN, mileage, color, condition, financial status)</li>
      </ul>
      <p>This information is used solely to process your vehicle appraisal request and contact you with an offer. We retain this information for up to 6 months.</p>

      <h2>HOW TO EXERCISE YOUR RIGHTS</h2>
      <div className="highlight-box">
        <p style={{ margin: 0 }}>To submit a data request, contact us at:<br />
        <strong><a href="mailto:autoprimeinc24@gmail.com">autoprimeinc24@gmail.com</a></strong><br />
        Please include your full name, email address, and the nature of your request. We will respond within 45 days.</p>
      </div>

      <h2>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</h2>
      <p>AutoPrime does not sell, rent, or share your personal information with third parties for their marketing purposes. If this practice ever changes, we will update this page and provide you with the ability to opt out prior to any such change taking effect.</p>

      <h2>CONTACT US</h2>
      <p>For any privacy-related questions or to submit a request:</p>
      <p>
        <strong>AutoPrime</strong><br />
        6281 Beach Blvd, Buena Park, CA 90621<br />
        United States<br />
        <a href="mailto:autoprimeinc24@gmail.com">autoprimeinc24@gmail.com</a>
      </p>
    </div>
  )
}
