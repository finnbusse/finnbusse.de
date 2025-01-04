// src/js/sendForm.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value

        try {
            const response = await fetch('https://contact-form.titusderhund.workers.dev/', { // Absolute URL zu deinem Worker
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, subject, message }),
            })

            const result = await response.json()

            if (result.success) {
                alert('Deine Nachricht wurde erfolgreich gesendet!')
                form.reset()
            } else {
                alert('Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.')
                console.error('Error:', result.error)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.')
        }
    })
})
