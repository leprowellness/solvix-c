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
            background-color: #0f172a;
            color: #e2e8f0;
            line-height: 1.6;
          }
          .wrapper {
            width: 100%;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 40px 20px;
          }
          .container {
            max-width: 700px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 188, 212, 0.2);
          }
          .header {
            padding: 40px;
            background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: pulse 3s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          .logo {
            font-size: 32px;
            font-weight: 900;
            letter-spacing: 3px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
          }
          .logo-sub {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.9);
            letter-spacing: 4px;
            margin-top: 8px;
            text-transform: uppercase;
            position: relative;
            z-index: 1;
          }
          .content {
            padding: 40px;
          }
          .priority-badge {
            display: inline-block;
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 8px 20px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 20px;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
            letter-spacing: 1px;
          }
          .greeting {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 15px;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
          .intro-text {
            font-size: 14px;
            color: #cbd5e1;
            margin-bottom: 30px;
            line-height: 1.8;
          }
          .section {
            margin: 25px 0;
            background: rgba(15, 23, 42, 0.5);
            border-left: 4px solid #00bcd4;
            padding: 25px;
            border-radius: 8px;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }
          .section-title {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #00bcd4;
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .section-title::before {
            content: '▶';
            font-size: 10px;
          }
          .info-row {
            display: flex;
            margin-bottom: 12px;
            font-size: 14px;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .info-row:last-child {
            margin-bottom: 0;
            border-bottom: none;
          }
          .label {
            font-weight: 600;
            color: #94a3b8;
            width: 150px;
            flex-shrink: 0;
          }
          .value {
            color: #e2e8f0;
            flex: 1;
            word-break: break-word;
            font-weight: 500;
          }
          .value strong {
            color: #ffffff;
          }
          .highlight {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 700;
            color: #1e293b;
            box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
          }
          .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #00bcd4 50%, transparent 100%);
            margin: 30px 0;
          }
          .action-box {
            background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 151, 167, 0.1) 100%);
            border: 2px solid rgba(0, 188, 212, 0.3);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            font-size: 14px;
            color: #e2e8f0;
            line-height: 1.8;
          }
          .action-box strong {
            color: #00bcd4;
            font-size: 16px;
            display: block;
            margin-bottom: 15px;
          }
          .action-item {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
          }
          .action-item::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00bcd4;
            font-weight: 700;
          }
          .footer {
            padding: 40px;
            background: rgba(15, 23, 42, 0.8);
            border-top: 2px solid rgba(0, 188, 212, 0.2);
            text-align: center;
          }
          .footer-text {
            font-size: 13px;
            color: #94a3b8;
            margin-bottom: 10px;
            line-height: 1.8;
          }
          .footer-text strong {
            color: #00bcd4;
          }
          .contact-info {
            font-size: 13px;
            color: #cbd5e1;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            line-height: 2;
          }
          .contact-info a {
            color: #00bcd4;
            text-decoration: none;
            font-weight: 600;
          }
          .contact-info a:hover {
            text-decoration: underline;
          }
          .description-box {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 8px;
            padding: 20px;
            font-size: 14px;
            color: #e2e8f0;
            line-height: 1.8;
            white-space: pre-wrap;
            word-wrap: break-word;
            border: 1px solid rgba(0, 188, 212, 0.2);
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1 class="logo">SOLVIX CORE</h1>
              <div class="logo-sub">Project Management System</div>
            </div>
            
            <div class="content">
              <div class="priority-badge">🔔 New Project Inquiry</div>
              <h2 class="greeting">New Client Submission Received</h2>
              <p class="intro-text">
                A new project inquiry has been submitted through your website. Review the comprehensive details below and respond within 24 hours to maintain client satisfaction.
              </p>

              <!-- Client Information Section -->
              <div class="section">
                <div class="section-title">👤 Client Information</div>
                <div class="info-row">
                  <span class="label">Full Name:</span>
                  <span class="value"><strong>${name}</strong></span>
                </div>
                <div class="info-row">
                  <span class="label">Email Address:</span>
                  <span class="value"><a href="mailto:${email}" style="color: #00bcd4; text-decoration: none; font-weight: 600;">${email || 'Not provided'}</a></span>
                </div>
                <div class="info-row">
                  <span class="label">Phone Number:</span>
                  <span class="value"><a href="tel:${phone}" style="color: #00bcd4; text-decoration: none; font-weight: 600;">${phone || 'Not provided'}</a></span>
                </div>
                ${whatsappNumber ? `<div class="info-row">
                  <span class="label">WhatsApp:</span>
                  <span class="value"><a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" style="color: #00bcd4; text-decoration: none; font-weight: 600;">📱 ${whatsappNumber}</a></span>
                </div>` : ''}
                ${country ? `<div class="info-row">
                  <span class="label">Country:</span>
                  <span class="value"><strong>🌍 ${country}</strong></span>
                </div>` : ''}
                ${company ? `<div class="info-row">
                  <span class="label">Company:</span>
                  <span class="value"><strong>🏢 ${company}</strong></span>
                </div>` : ''}
              </div>

              <!-- Project Details Section -->
              <div class="section">
                <div class="section-title">📋 Project Details</div>
                <div class="info-row">
                  <span class="label">Service Type:</span>
                  <span class="value"><strong>${service || 'Not specified'}</strong></span>
                </div>
                ${projectType ? `<div class="info-row">
                  <span class="label">Project Type:</span>
                  <span class="value"><strong>${projectType}</strong></span>
                </div>` : ''}
                ${projectStage ? `<div class="info-row">
                  <span class="label">Project Stage:</span>
                  <span class="value">${projectStage}</span>
                </div>` : ''}
              </div>

              <!-- Budget & Timeline Section -->
              <div class="section">
                <div class="section-title">💰 Budget & Timeline</div>
                ${budget ? `<div class="info-row">
                  <span class="label">Budget:</span>
                  <span class="value"><span class="highlight">${budget}</span></span>
                </div>` : ''}
                ${timeline ? `<div class="info-row">
                  <span class="label">Timeline:</span>
                  <span class="value"><strong>⏱️ ${timeline}</strong></span>
                </div>` : ''}
              </div>

              <!-- Project Description Section -->
              ${projectDescription ? `<div class="section">
                <div class="section-title">📝 Project Description</div>
                <div class="description-box">${projectDescription}</div>
              </div>` : ''}

              <!-- Technical Requirements Section -->
              ${(technologies || teamSize) ? `<div class="section">
                <div class="section-title">⚙️ Technical Requirements</div>
                ${technologies ? `<div class="info-row">
                  <span class="label">Technologies:</span>
                  <span class="value"><strong>${technologies}</strong></span>
                </div>` : ''}
                ${teamSize ? `<div class="info-row">
                  <span class="label">Team Size:</span>
                  <span class="value"><strong>${teamSize}</strong></span>
                </div>` : ''}
              </div>` : ''}

              <!-- Additional Notes Section -->
              ${additionalNotes ? `<div class="section">
                <div class="section-title">📌 Additional Notes</div>
                <div class="description-box">${additionalNotes}</div>
              </div>` : ''}

              <!-- Client Message Section -->
              <div class="section">
                <div class="section-title">💬 Client Message</div>
                <div class="description-box">${message}</div>
              </div>

              <div class="divider"></div>

              <!-- Action Items -->
              <div class="action-box">
                <strong>⚡ Recommended Action Plan:</strong>
                <div class="action-item">Review project requirements and assess budget alignment</div>
                <div class="action-item">Check team availability and timeline feasibility</div>
                <div class="action-item">Contact client within 24 hours via email or phone</div>
                <div class="action-item">Prepare and send preliminary proposal with timeline</div>
                <div class="action-item">Schedule discovery call to discuss project details</div>
              </div>
            </div>

            <div class="footer">
              <div class="footer-text">
                <strong>Solvix Core - Project Management System</strong>
              </div>
              <div class="footer-text">
                This is an automated notification from your project inquiry system.
              </div>
              <div class="contact-info">
                <strong>📞 Quick Contact Information:</strong><br>
                Email: <a href="mailto:${email}">${email}</a><br>
                Phone: ${phone || 'Not provided'}<br>
                ${whatsappNumber ? `WhatsApp: <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}">${whatsappNumber}</a><br>` : ''}
                Country: ${country || 'Not provided'}<br><br>
                <strong>⏰ Response Deadline:</strong> Within 24 business hours<br>
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
            background-color: #0f172a;
            color: #e2e8f0;
            line-height: 1.6;
          }
          .wrapper {
            width: 100%;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 188, 212, 0.2);
          }
          .header {
            padding: 50px 40px;
            background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: pulse 3s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          .logo {
            font-size: 32px;
            font-weight: 900;
            letter-spacing: 3px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
          }
          .logo-sub {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.9);
            letter-spacing: 4px;
            margin-top: 8px;
            text-transform: uppercase;
            position: relative;
            z-index: 1;
          }
          .content {
            padding: 50px 40px;
            text-align: center;
          }
          .success-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
            animation: bounce 2s ease-in-out infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .greeting {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
          .message-box {
            background: rgba(16, 185, 129, 0.1);
            border-left: 4px solid #10b981;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            line-height: 1.8;
            text-align: left;
            backdrop-filter: blur(10px);
          }
          .message-box p {
            font-size: 15px;
            color: #e2e8f0;
            margin-bottom: 12px;
          }
          .message-box p:last-child {
            margin-bottom: 0;
          }
          .highlight {
            color: #10b981;
            font-weight: 700;
          }
          .timeline {
            margin: 40px 0;
            padding: 0;
            background-color: transparent;
            border-radius: 0;
            text-align: left;
          }
          .timeline-item {
            margin-bottom: 25px;
            padding-bottom: 0;
            border-bottom: none;
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }
          .timeline-item:last-child {
            margin-bottom: 0;
          }
          .timeline-number {
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 188, 212, 0.4);
          }
          .timeline-content {
            flex: 1;
            padding-top: 5px;
          }
          .timeline-title {
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 5px;
          }
          .timeline-text {
            font-size: 14px;
            color: #cbd5e1;
            line-height: 1.6;
          }
          .cta-section {
            margin: 40px 0;
          }
          .cta-text {
            font-size: 15px;
            color: #cbd5e1;
            margin-bottom: 20px;
          }
          .cta-link {
            display: inline-block;
            padding: 16px 40px;
            background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
            color: #ffffff;
            text-decoration: none;
            font-weight: 700;
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 188, 212, 0.4);
          }
          .cta-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 188, 212, 0.5);
          }
          .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #00bcd4 50%, transparent 100%);
            margin: 40px 0;
          }
          .info-section {
            background: rgba(15, 23, 42, 0.5);
            border-radius: 8px;
            padding: 20px;
            font-size: 14px;
            color: #cbd5e1;
            text-align: left;
            margin: 30px 0;
            line-height: 1.8;
            border: 1px solid rgba(0, 188, 212, 0.2);
          }
          .info-section strong {
            color: #00bcd4;
          }
          .footer {
            padding: 40px;
            background: rgba(15, 23, 42, 0.8);
            border-top: 2px solid rgba(0, 188, 212, 0.2);
            text-align: center;
          }
          .footer-text {
            font-size: 13px;
            color: #94a3b8;
            margin-bottom: 10px;
            line-height: 1.8;
          }
          .footer-text strong {
            color: #00bcd4;
          }
          .footer-link {
            color: #00bcd4;
            text-decoration: none;
            font-weight: 600;
          }
          .footer-link:hover {
            text-decoration: underline;
          }
          .social-links {
            margin: 20px 0;
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
              <div class="success-icon">✓</div>
              <h2 class="greeting">Thank You, ${name}! 🎉</h2>

              <div class="message-box">
                <p><strong>Your project inquiry has been successfully received!</strong></p>
                <p>We're excited about the opportunity to work with you. Our team is already reviewing your requirements and will prepare a comprehensive response tailored to your needs.</p>
                <p>You can expect a <span class="highlight">personalized response within 24 business hours</span>.</p>
              </div>

              <div class="divider"></div>

              <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; text-align: left; margin-bottom: 30px;">What Happens Next 🚀</h3>

              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-number">1</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Inquiry Review & Analysis</div>
                    <div class="timeline-text">Our specialist team is carefully reviewing your project details to understand your vision, requirements, and business objectives.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">2</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Feasibility Assessment</div>
                    <div class="timeline-text">We assess project scope, timeline requirements, and resource allocation to ensure we can deliver exceptional results.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">3</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Personalized Response</div>
                    <div class="timeline-text">You'll receive a detailed response including a preliminary proposal, project timeline, cost estimate, and next steps.</div>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="cta-section">
                <p class="cta-text">While you wait, explore our latest projects and success stories</p>
                <a href="https://solvixcore.com/portfolio" class="cta-link">View Our Portfolio →</a>
              </div>

              <div class="info-section">
                <strong>📌 Important Information:</strong><br><br>
                • <strong>Response Time:</strong> Within 24 business hours (Monday-Friday, 9 AM - 6 PM EST)<br>
                • <strong>Urgent Inquiries:</strong> For time-sensitive projects, please call us directly<br>
                • <strong>Additional Details:</strong> Feel free to reply to this email with any additional information<br>
                • <strong>Next Steps:</strong> We'll schedule a discovery call to discuss your project in detail
              </div>
            </div>

            <div class="footer">
              <div class="footer-text">
                <strong>Solvix Core - Building Digital Excellence</strong><br>
                Premium Technology Services for Modern Businesses
              </div>
              <div class="social-links">
                <div class="footer-text">
                  📧 Email: info@solvixcore.com<br>
                  📞 Phone: +1 (437) 889-8265<br>
                  📍 Location: Ottawa, Ontario, Canada<br>
                  🕐 Business Hours: Monday - Friday, 9 AM - 6 PM EST
                </div>
              </div>
              <div class="footer-text" style="margin-top: 20px;">
                &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.<br>
                <a href="https://solvixcore.com" class="footer-link">Visit Our Website</a> |
                <a href="https://solvixcore.com/services" class="footer-link">Our Services</a> |
                <a href="https://solvixcore.com/about" class="footer-link">About Us</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};