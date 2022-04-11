const sequelize = require('../database')
const { QueryTypes } = require("sequelize");

const findMostProffitProfession = async (start, end) => {
    return await sequelize.query(`
        SELECT p.profession, SUM(j.price) AS total_proffit
        FROM profiles p
        INNER JOIN contracts c ON c.contractor_id = p.id
        INNER JOIN jobs j ON j.contract_id = c.id
        WHERE 
            j.paid IS NOT NULL AND
            j.payment_date BETWEEN :start_date AND :end_date
        GROUP BY p.profession
        ORDER BY 2 DESC
        LIMIT 1;`, 
        {
            type: QueryTypes.SELECT,
            replacements: {
                start_date: new Date(start).toISOString(),
                end_date: new Date(end).toISOString()
            }, 
        }
    )

}

const listClientsHighestSpending = async (start, end, limit) => {
    return await sequelize.query(`
        SELECT p.id, p.first_name || " " || p.last_name as full_name, y.prices as paid
        FROM (
            SELECT p.id, SUM(j.price) AS prices
            FROM profiles p
            INNER JOIN contracts c ON c.client_id = p.id
            INNER JOIN jobs j ON j.contract_id = c.id
            WHERE 
                j.paid IS NOT NULL AND
                j.payment_date BETWEEN :start_date AND :end_date
            GROUP BY p.id
            ORDER BY 2 DESC
        ) y
        INNER JOIN profiles p ON y.id = p.id
        LIMIT :limit;`, 
        { 
            type: QueryTypes.SELECT,
            replacements: { 
                start_date: new Date(start).toISOString(),
                end_date: new Date(end).toISOString(),
                limit: limit || 2
            }, 
        }
    )
}

module.exports = { findMostProffitProfession, listClientsHighestSpending }