const nodemailer = require('nodemailer');


const setupTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        host:"razgallah.marwa99@gmail.com",
        port:587,
        secure:false,
        auth: {
            user: 'razgallah.marwa99@gmail.com', 
            pass: 'ocnl vlbm wppr ovtn'
        }
    });
};


const sendReservationConfirmationEmail = async (userEmail, reservation, roomName) => {
    try {
        const transporter = setupTransporter();

        await transporter.sendMail({
            from: 'razgallah.marwa99@gmail.com',
            to: userEmail,
            subject: 'Confirmation ',
            html: `Your reservation has been confirmed for the room ${roomName} on ${reservation.date} from ${reservation.heureDebut} to ${reservation.heureFin}.`
        });

        console.log('Confirmation email sent successfully');
    } catch (error) {
        console.error('Error sending confirmation email :', error);
    }
};



const sendReservationModificationEmail = async (userEmail, reservation, roomName) => {
    try {
        const transporter = setupTransporter();

        await transporter.sendMail({
            from: 'razgallah.marwa99@gmail.com', 
     
            to: userEmail,
            subject: 'Update Reservation',
            html: `Votre réservation pour la salle ${roomName}a été modifiée. Nouvelles informations : date: ${reservation.date}, heure de début: ${reservation.heureDebut}, heure de fin: ${reservation.heureFin}.`
        });

        console.log('E-mail de modification envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail de modification :', error);
    }
};


const sendReservationCancellationEmail = async (userEmail, reservation, roomName) => {
    try {
        const transporter = setupTransporter();

        await transporter.sendMail({
            from: 'razgallah.marwa99@gmail.com', 
           
            to: userEmail,
            subject: 'Annulation de réservation',
            html: `Votre réservation pour la salle ${roomName} a été annulée.`
        });

        console.log('E-mail d\'annulation envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail d\'annulation :', error);
    }
};

module.exports = {
    sendReservationConfirmationEmail,
    sendReservationModificationEmail,
    sendReservationCancellationEmail
};
