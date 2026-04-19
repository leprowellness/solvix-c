export const generateEmailTemplate = (
  name: string,
  message: string,
  service?: string,
  company?: string,
  phone?: string,
  email?: string,
  projectType?: string,
  projectDescription?: string,
  budget?: string,
  timeline?: string,
  projectStage?: string,
  technologies?: string,
  teamSize?: string,
  additionalNotes?: string,
  country?: string,
  whatsappNumber?: string
) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry - Solvix Core</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333333;
            line-height: 1.6;
          }
          .wrapper {
            width: 100%;
            background-color: #f5f5f5;
            padding: 20px 0;
          }
          .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            padding: 30px 40px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            text-align: center;
            border-bottom: 3px solid #00bcd4;
          }
          .logo {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
          }
          .logo-sub {
            font-size: 12px;
            color: #00bcd4;
            letter-spacing: 3px;
            margin-top: 5px;
          }
          .content {
            padding: 40px;
          }
          .greeting {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
          }
          .intro-text {
            font-size: 14px;
            color: #666666;
            margin-bottom: 25px;
            line-height: 1.8;
          }
          .section {
            margin: 25px 0;
            background-color: #f9fafb;
            border-left: 4px solid #00bcd4;
            padding: 20px;
            border-radius: 4px;
          }
          .section-title {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #1e293b;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .info-row {
            display: flex;
            margin-bottom: 10px;
            font-size: 13px;
          }
          .info-row:last-child {
            margin-bottom: 0;
          }
          .label {
            font-weight: 600;
            color: #666666;
            width: 140px;
            flex-shrink: 0;
          }
          .value {
            color: #1e293b;
            flex: 1;
            word-break: break-word;
          }
          .highlight {
            background-color: #fff9e6;
            padding: 2px 4px;
            border-radius: 2px;
            font-weight: 600;
            color: #d97706;
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 20px 0;
          }
          .footer {
            padding: 30px 40px;
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
            text-align: center;
          }
          .footer-text {
            font-size: 12px;
            color: #999999;
            margin-bottom: 8px;
            line-height: 1.6;
          }
          .contact-info {
            font-size: 12px;
            color: #666666;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #e5e7eb;
          }
          .priority-badge {
            display: inline-block;
            background-color: #ff6b6b;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1 class="logo">SOLVIX CORE</h1>
              <div class="logo-sub">Project Inquiry Management System</div>
            </div>
            
            <div class="content">
              <div class="priority-badge">New Project Inquiry</div>
              <h2 class="greeting">New Project Submission Received</h2>
              <p class="intro-text">
                You have received a new project inquiry. Review the details below to assess alignment with your services and current capacity.
              </p>

              <!-- Client Information Section -->
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="info-row">
                  <span class="label">Name:</span>
                  <span class="value"><strong>${name}</strong></span>
                </div>
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}" style="color: #00bcd4; text-decoration: none;">${email || 'Not provided'}</a></span>
                </div>
                <div class="info-row">
                  <span class="label">Phone:</span>
                  <span class="value"><a href="tel:${phone}" style="color: #00bcd4; text-decoration: none;">${phone || 'Not provided'}</a></span>
                </div>
                ${whatsappNumber ? `<div class="info-row">
                  <span class="label">WhatsApp:</span>
                  <span class="value"><a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" style="color: #00bcd4; text-decoration: none;">${whatsappNumber}</a></span>
                </div>` : ''}
                ${country ? `<div class="info-row">
                  <span class="label">Country:</span>
                  <span class="value"><strong>${country}</strong></span>
                </div>` : ''}
                ${company ? `<div class="info-row">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>` : ''}
              </div>

              <!-- Project Details Section -->
              <div class="section">
                <div class="section-title">Project Details</div>
                <div class="info-row">
                  <span class="label">Service:</span>
                  <span class="value"><strong>${service || 'Not specified'}</strong></span>
                </div>
                ${projectType ? `<div class="info-row">
                  <span class="label">Project Type:</span>
                  <span class="value"><strong>${projectType}</strong></span>
                </div>` : ''}
              </div>

              <!-- Project Scope Section -->
              <div class="section">
                <div class="section-title">Project Scope</div>
                ${budget ? `<div class="info-row">
                  <span class="label">Budget:</span>
                  <span class="value"><span class="highlight">${budget}</span></span>
                </div>` : ''}
                ${timeline ? `<div class="info-row">
                  <span class="label">Timeline:</span>
                  <span class="value"><strong>${timeline}</strong></span>
                </div>` : ''}
                ${projectStage ? `<div class="info-row">
                  <span class="label">Project Stage:</span>
                  <span class="value">${projectStage}</span>
                </div>` : ''}
              </div>

              <!-- Project Description Section -->
              ${projectDescription ? `<div class="section">
                <div class="section-title">Project Description</div>
                <div style="font-size: 13px; color: #333333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${projectDescription}
                </div>
              </div>` : ''}

              <!-- Technical Requirements Section -->
              ${(technologies || teamSize) ? `<div class="section">
                <div class="section-title">Technical Requirements</div>
                ${technologies ? `<div class="info-row">
                  <span class="label">Technologies:</span>
                  <span class="value">${technologies}</span>
                </div>` : ''}
                ${teamSize ? `<div class="info-row">
                  <span class="label">Team Size:</span>
                  <span class="value">${teamSize}</span>
                </div>` : ''}
              </div>` : ''}

              <!-- Additional Notes Section -->
              ${additionalNotes ? `<div class="section">
                <div class="section-title">Additional Notes</div>
                <div style="font-size: 13px; color: #333333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${additionalNotes}
                </div>
              </div>` : ''}

              <!-- Client Message Section -->
              <div class="section">
                <div class="section-title">Client Message</div>
                <div style="font-size: 13px; color: #333333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${message}
                </div>
              </div>

              <div class="divider"></div>

              <!-- Action Items -->
              <div style="background-color: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 4px; padding: 15px; margin: 20px 0; font-size: 13px; color: #0466c2;">
                <strong>Recommended Next Steps:</strong><br>
                1. Review project requirements and budget alignment<br>
                2. Assess team availability and timeline feasibility<br>
                3. Contact client within 24 hours<br>
                4. Send preliminary proposal and timeline
              </div>
            </div>

            <div class="footer">
              <div class="footer-text">
                <strong>Solvix Core - Project Management System</strong>
              </div>
              <div class="footer-text">
                This is an automated system notification. Do not reply to this email.
              </div>
              <div class="contact-info">
                <strong>Client Contact Information:</strong><br>
                Email: <a href="mailto:${email}" style="color: #00bcd4; text-decoration: none;">${email}</a><br>
                Phone: ${phone || 'Not provided'}<br>
                ${whatsappNumber ? `WhatsApp: <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" style="color: #00bcd4; text-decoration: none;">${whatsappNumber}</a><br>` : ''}
                Country: ${country || 'Not provided'}<br>
                <strong>Response Timeframe:</strong> Within 24 hours<br>
                &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const generateUserConfirmationTemplate = (name: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inquiry Confirmation - Solvix Core</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333333;
            line-height: 1.6;
          }
          .wrapper {
            width: 100%;
            background-color: #f5f5f5;
            padding: 20px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            padding: 40px 30px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            text-align: center;
            border-bottom: 3px solid #00bcd4;
          }
          .logo {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
          }
          .logo-sub {
            font-size: 12px;
            color: #00bcd4;
            letter-spacing: 3px;
            margin-top: 5px;
          }
          .content {
            padding: 40px;
            text-align: center;
          }
          .success-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            background-color: #d1fae5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
          }
          .greeting {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
          }
          .message-box {
            background-color: #f0fdf4;
            border-left: 4px solid #10b981;
            border-radius: 0;
            padding: 20px;
            margin: 25px 0;
            line-height: 1.8;
            text-align: left;
          }
          .message-box p {
            font-size: 14px;
            color: #333333;
            margin-bottom: 10px;
          }
          .message-box p:last-child {
            margin-bottom: 0;
          }
          .highlight {
            color: #10b981;
            font-weight: 600;
          }
          .timeline {
            margin: 30px 0;
            padding: 0;
            background-color: transparent;
            border-radius: 0;
            text-align: left;
          }
          .timeline-item {
            margin-bottom: 20px;
            padding-bottom: 0;
            border-bottom: none;
            display: flex;
            gap: 15px;
          }
          .timeline-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
          }
          .timeline-number {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            background-color: #00bcd4;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .timeline-content {
            flex: 1;
          }
          .timeline-title {
            font-size: 14px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 3px;
          }
          .timeline-text {
            font-size: 13px;
            color: #666666;
          }
          .cta-section {
            margin: 30px 0;
          }
          .cta-link {
            display: inline-block;
            padding: 14px 32px;
            background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            border-radius: 4px;
            font-size: 14px;
            transition: all 0.3s ease;
          }
          .cta-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 188, 212, 0.3);
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 20px 0;
          }
          .info-section {
            background-color: #f9fafb;
            border-radius: 4px;
            padding: 15px;
            font-size: 13px;
            color: #666666;
            text-align: left;
            margin: 20px 0;
            line-height: 1.8;
          }
          .footer {
            padding: 30px 40px;
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
            text-align: center;
          }
          .footer-text {
            font-size: 12px;
            color: #999999;
            margin-bottom: 8px;
            line-height: 1.6;
          }
          .footer-link {
            color: #00bcd4;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1 class="logo">SOLVIX CORE</h1>
              <div class="logo-sub">Inquiry Confirmation</div>
            </div>

            <div class="content">
              <div class="success-icon">?</div>
              <h2 class="greeting">Thank You, ${name}!</h2>
              
              <div class="message-box">
                <p>Your project inquiry has been successfully received by the Solvix Core team.</p>
                <p>We appreciate your interest and are committed to reviewing your requirements thoroughly. You can expect a <span class="highlight">personalized response within 24 business hours</span>.</p>
              </div>

              <div class="divider"></div>

              <h3 style="font-size: 16px; font-weight: 600; color: #1e293b; text-align: left; margin-bottom: 20px;">What Happens Next</h3>
              
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-number">1</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Inquiry Processing</div>
                    <div class="timeline-text">Your project details are being reviewed by our specialist team to understand your vision and requirements.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">2</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Analysis & Planning</div>
                    <div class="timeline-text">We assess project feasibility, timeline, and resource allocation for optimal delivery.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">3</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Response & Proposal</div>
                    <div class="timeline-text">You will receive a detailed response including a preliminary proposal, timeline, and cost estimate.</div>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="cta-section">
                <p style="font-size: 14px; color: #666666; margin-bottom: 15px;">Explore our latest work and capabilities</p>
                <a href="https://solvixcore.com/portfolio" class="cta-link">View Our Portfolio</a>
              </div>

              <div class="info-section">
                <strong>Important Information:</strong><br>
                While we can also provide expedited responses for urgent matters, our standard response time is within 24 business hours. If you have any follow-up questions or need to provide additional details, please reply directly to this email.
              </div>
            </div>

            <div class="footer">
              <div class="footer-text">
                <strong>Solvix Core - Building Digital Solutions</strong><br>
                Premium Technology Services for Modern Businesses
              </div>
              <div style="margin: 15px 0; padding: 15px 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
                <div class="footer-text">
                  Contact: info@solvixcore.com<br>
                  Business Hours: Monday - Friday, 9 AM - 6 PM EST<br>
                  Location: Ottawa, Ontario, Canada
                </div>
              </div>
              <div class="footer-text" style="margin-top: 15px;">
                &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.<br>
                <a href="https://solvixcore.com" class="footer-link">Visit Our Website</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};