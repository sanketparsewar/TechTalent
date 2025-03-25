const form = document.getElementById('contact');
      form.addEventListener('submit', function (event) {
        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // Generate the email link
        const subject = document.getElementById('subject').value;
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        const mailtoLink = `mailto:contact.techtalent@gmail.com?subject=${subject}&body=${body}`;
        // Open the mail client or redirect to the webmail if on mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
          // Try to open the default email app
          window.open(`mailto:contact.techtalent@gmail.com?subject=${subject}&body=${body}`);
        } else {
          window.open(mailtoLink);
        }

        document.getElementById('name').value ='';
        document.getElementById('email').value='';
        document.getElementById('message').value='';
        document.getElementById('subject').value='';
        alert('Message sent!');
        event.preventDefault();
      });