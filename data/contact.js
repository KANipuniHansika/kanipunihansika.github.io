/* ==========================================================================
   CONTACT PAGE CONTENT
   Your email address is set in data/site.js, so it only lives in one place.
   ========================================================================== */

SITE.page = {
  label: "Let’s connect",
  heading: ["Good conversations", "start with hello."], // The second line is highlighted.
  introduction: "Have a research idea, a teaching opportunity, or something you’re curious about? I’d love to hear from you.",
  topics: ["Research collaborations", "Teaching & learning", "HCI & human–AI interaction"],
  buttonText: "Say hello",

  // The message form. Visitors' messages arrive by email.
  form: {
    // The key from web3forms.com, inside the quotation marks. It decides which
    // inbox receives the messages. To use a different inbox, get a new key:
    // changing the email in data/site.js does NOT change where messages go.
    accessKey: "",

    label: "Send a message",
    heading: "Write to me here",
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "Your message",
    submitText: "Send message",
    sendingText: "Sending…",
    successMessage: "Thank you! Your message is on its way, and I’ll get back to you soon.",
    errorMessage: "Sorry, your message could not be sent. Please email me instead at", // Your email address is added after this.
    emailSubject: "New message from your portfolio website", // The subject line of the email you receive.
  },

  affiliation: {
    label: "Where I’m based",
    name: "University of Ruhuna",
    lines: [ // Each item starts on a new line.
      "Department of Electrical and Information Engineering",
      "Faculty of Engineering · Sri Lanka",
    ],
  },

  signoff: "A little curiosity goes a long way.",
};
