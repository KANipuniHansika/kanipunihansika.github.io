/* ==========================================================================
   CONTACT FORM  (you do not need to edit this file)

   Sends a visitor's message through web3forms.com, which emails it to the
   inbox linked to the access key in data/contact.js. If sending fails, what
   the visitor typed is kept and they are shown your email address instead.
   ========================================================================== */

(function () {
  const SEND_ADDRESS = "https://api.web3forms.com/submit";

  const form = document.getElementById("contact-form");
  if (!form) return;

  const words = SITE.page.form;
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".contact-form-status");

  function showStatus(message, kind) {
    status.textContent = message;
    status.dataset.kind = kind;
  }

  function showFailure() {
    showStatus(words.errorMessage + " " + SITE.settings.email, "error");
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!words.accessKey) {
      console.error("The contact form has no accessKey in data/contact.js.");
      showFailure();
      return;
    }

    const message = new FormData(form);
    message.append("access_key", words.accessKey);
    message.append("subject", words.emailSubject);

    button.disabled = true;
    button.textContent = words.sendingText;
    showStatus("", "");

    try {
      const response = await fetch(SEND_ADDRESS, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: message,
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message || "The message was not accepted.");

      form.reset();
      showStatus(words.successMessage, "success");
    } catch (error) {
      console.error(error);
      showFailure();
    } finally {
      button.disabled = false;
      button.textContent = words.submitText;
    }
  });
})();
