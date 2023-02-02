const { Combo } = require('../db');

const getComboDb = async () => {
    const allComboDb = await Combo.findAll();
    return allComboDb;
}



module.exports = {getComboDb};