using Backend.Services.Interfaces;
using MailKit.Net.Smtp;
using MimeKit;

namespace Backend.Services;

public class EmailService : IEmailService
{
    private readonly string _gmailUser;
    private readonly string _appPassword;
    private readonly string _notifyTo;
    private const string FromName = "Pontera Studios";
    private const string FromAddress = "hello@ponterastudios.com";

    public EmailService(IConfiguration config)
    {
        _gmailUser = config["Email:GmailUser"] ?? throw new Exception("Email:GmailUser not configured");
        _appPassword = config["Email:AppPassword"] ?? throw new Exception("Email:AppPassword not configured");
        _notifyTo = config["Email:NotifyTo"] ?? _gmailUser;
    }

    // ── Internal send method ──

    private async Task SendAsync(string toName, string toEmail, string subject, string htmlBody)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(FromName, FromAddress));
        message.To.Add(new MailboxAddress(toName, toEmail));
        message.Subject = subject;

        message.Body = new TextPart("html") { Text = htmlBody };

        using var client = new SmtpClient();
        await client.ConnectAsync("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
        await client.AuthenticateAsync(_gmailUser, _appPassword);
        await client.SendAsync(message);
        await client.DisconnectAsync(true);
    }

    // ── Contact form ──

    public async Task SendContactNotificationAsync(string name, string email, string? company, string service, string message)
    {
        var html = $@"
        <div style=""font-family: Inter, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;"">
            <h2 style=""font-size: 18px; color: #0f172a; margin-bottom: 20px;"">New Contact Form Submission</h2>
            <table style=""width: 100%; font-size: 14px; border-collapse: collapse;"">
                <tr><td style=""padding: 8px 0; color: #64748b; width: 100px;"">Name</td><td style=""padding: 8px 0; color: #0f172a; font-weight: 500;"">{Escape(name)}</td></tr>
                <tr><td style=""padding: 8px 0; color: #64748b;"">Email</td><td style=""padding: 8px 0;""><a href=""mailto:{Escape(email)}"">{Escape(email)}</a></td></tr>
                {(company != null ? $@"<tr><td style=""padding: 8px 0; color: #64748b;"">Company</td><td style=""padding: 8px 0; color: #0f172a;"">{Escape(company)}</td></tr>" : "")}
                <tr><td style=""padding: 8px 0; color: #64748b;"">Service</td><td style=""padding: 8px 0; color: #0f172a;"">{Escape(service)}</td></tr>
            </table>
            <div style=""margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; font-size: 14px; color: #334155; line-height: 1.6;"">
                {Escape(message)}
            </div>
        </div>";

        await SendAsync("Neso", _notifyTo, $"New lead: {name} - {service}", html);
    }

    public async Task SendContactAutoReplyAsync(string name, string email)
    {
        var firstName = name.Trim().Split(' ')[0];
        var html = BuildAutoReplyHtml(
            firstName,
            "Thanks for reaching out",
            $@"
            <p>Hi {Escape(firstName)},</p>
            <p>We've received your message and wanted to let you know - a real person is looking at this, not a bot.</p>
            <p>We'll get back to you shortly. If your request is time-sensitive, feel free to reply to this email directly and we'll prioritize it.</p>
            <p>Talk soon,<br><strong>The Pontera Studios Team</strong></p>"
        );

        await SendAsync(name, email, "We got your message - we'll be in touch shortly", html);
    }

    // ── SEO Report ──

    public async Task SendSeoRequestNotificationAsync(string name, string email, string? company, string website, string? message)
    {
        var html = $@"
        <div style=""font-family: Inter, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;"">
            <h2 style=""font-size: 18px; color: #0f172a; margin-bottom: 20px;"">New SEO Report Request</h2>
            <table style=""width: 100%; font-size: 14px; border-collapse: collapse;"">
                <tr><td style=""padding: 8px 0; color: #64748b; width: 100px;"">Name</td><td style=""padding: 8px 0; color: #0f172a; font-weight: 500;"">{Escape(name)}</td></tr>
                <tr><td style=""padding: 8px 0; color: #64748b;"">Email</td><td style=""padding: 8px 0;""><a href=""mailto:{Escape(email)}"">{Escape(email)}</a></td></tr>
                {(company != null ? $@"<tr><td style=""padding: 8px 0; color: #64748b;"">Company</td><td style=""padding: 8px 0; color: #0f172a;"">{Escape(company)}</td></tr>" : "")}
                <tr><td style=""padding: 8px 0; color: #64748b;"">Website</td><td style=""padding: 8px 0;""><a href=""{Escape(website)}"">{Escape(website)}</a></td></tr>
            </table>
            {(message != null ? $@"<div style=""margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; font-size: 14px; color: #334155; line-height: 1.6;"">{Escape(message)}</div>" : "")}
        </div>";

        await SendAsync("Neso", _notifyTo, $"SEO Report Request: {website} - {name}", html);
    }

    public async Task SendSeoAutoReplyAsync(string name, string email, string website)
    {
        var firstName = name.Trim().Split(' ')[0];
        var html = BuildAutoReplyHtml(
            firstName,
            "Your SEO report is on the way",
            $@"
            <p>Hi {Escape(firstName)},</p>
            <p>Thanks for requesting a free SEO audit for <strong>{Escape(website)}</strong>. We're on it.</p>
            <p>Here's what we'll be analyzing:</p>
            <ul style=""color: #475569; font-size: 14px; line-height: 2; padding-left: 20px;"">
                <li><strong>Technical SEO</strong> - meta tags, heading structure, indexing, structured data</li>
                <li><strong>Page Speed</strong> - server response times, Core Web Vitals, compression</li>
                <li><strong>Security</strong> - HTTPS, security headers, vulnerability checks</li>
                <li><strong>Accessibility</strong> - ARIA labels, alt text, form labels, keyboard navigation</li>
                <li><strong>Content</strong> - duplicate titles, missing descriptions, broken links</li>
            </ul>
            <p>You'll receive a full report within <strong>48 hours</strong> with a clear breakdown of what's working, what's not, and exactly what to fix - prioritized by impact on your Google rankings.</p>
            <p>In the meantime, if you have any questions or there's something specific you'd like us to focus on, just reply to this email.</p>
            <p>Talk soon,<br><strong>The Pontera Studios Team</strong></p>"
        );

        await SendAsync(name, email, $"Your SEO report for {website} - we'll have it within 48 hours", html);
    }

    // ── Chat lead ──

    public async Task SendChatLeadNotificationAsync(string name, string email, string? company, string? needs, string? service)
    {
        var html = $@"
        <div style=""font-family: Inter, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;"">
            <h2 style=""font-size: 18px; color: #0f172a; margin-bottom: 20px;"">New Chat Lead Captured</h2>
            <table style=""width: 100%; font-size: 14px; border-collapse: collapse;"">
                <tr><td style=""padding: 8px 0; color: #64748b; width: 100px;"">Name</td><td style=""padding: 8px 0; color: #0f172a; font-weight: 500;"">{Escape(name)}</td></tr>
                <tr><td style=""padding: 8px 0; color: #64748b;"">Email</td><td style=""padding: 8px 0;""><a href=""mailto:{Escape(email)}"">{Escape(email)}</a></td></tr>
                {(company != null ? $@"<tr><td style=""padding: 8px 0; color: #64748b;"">Company</td><td style=""padding: 8px 0; color: #0f172a;"">{Escape(company)}</td></tr>" : "")}
                {(needs != null ? $@"<tr><td style=""padding: 8px 0; color: #64748b;"">Needs</td><td style=""padding: 8px 0; color: #0f172a;"">{Escape(needs)}</td></tr>" : "")}
                {(service != null ? $@"<tr><td style=""padding: 8px 0; color: #64748b;"">Service</td><td style=""padding: 8px 0; color: #0f172a;"">{Escape(service)}</td></tr>" : "")}
            </table>
        </div>";

        await SendAsync("Neso", _notifyTo, $"Chat lead: {name} - {service ?? "General inquiry"}", html);
    }

    // ── Shared template ──

    private static string BuildAutoReplyHtml(string firstName, string preheader, string bodyContent)
    {
        return $@"
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset=""utf-8"">
            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
            <title>{preheader}</title>
        </head>
        <body style=""margin: 0; padding: 0; background: #f1f5f9; font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;"">
            <!-- Preheader -->
            <span style=""display: none; max-height: 0; overflow: hidden;"">{preheader}</span>

            <div style=""max-width: 560px; margin: 0 auto; padding: 40px 20px;"">
                <!-- Header -->
                <div style=""padding: 32px 32px 24px; background: #0f172a; border-radius: 12px 12px 0 0;"">
                    <span style=""font-size: 18px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;"">Pontera Studios</span>
                </div>

                <!-- Body -->
                <div style=""padding: 32px; background: #ffffff; font-size: 15px; color: #334155; line-height: 1.7;"">
                    {bodyContent}
                </div>

                <!-- Footer -->
                <div style=""padding: 24px 32px; background: #f8fafc; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;"">
                    <p style=""font-size: 12px; color: #94a3b8; margin: 0;"">
                        Pontera Studios &middot; hello@ponterastudios.com
                    </p>
                </div>
            </div>
        </body>
        </html>";
    }

    private static string Escape(string? text) =>
        System.Net.WebUtility.HtmlEncode(text ?? "");
}
