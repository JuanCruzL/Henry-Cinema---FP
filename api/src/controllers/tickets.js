
const { Ticket } = require('../db');

const getTicketsDb = async () => {

    const allTicketsDb = await Ticket.findAll()
    return allTicketsDb;
}

module.exports = {getTicketsDb};