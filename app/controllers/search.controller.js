const db = require(database_path('models'));
const City = db.City;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;


/**
 * Display a listing of the resource for autocomplete
 *
 * @returns JsonResponse
 */
exports.search = async (req, res) => {
    const q = req.query.q ? req.query.q : null;
    const latitude = req.query.latitude ? req.query.latitude : null;
    const longitude = req.query.longitude ? req.query.longitude : null;


    const cities = await sequelize.query(`
        SELECT
            id,
            CONCAT(name, ', ', admin1, ', ', country) as name,
            lat,
            \`long\`,
            TRUNCATE(MATCH (name) AGAINST ('${q}*' IN BOOLEAN MODE) / 10, 1)  AS score
        FROM Cities
        WHERE
            MATCH (name) AGAINST ('${q}*' IN BOOLEAN MODE)
            AND name LIKE '%${q}%'
            OR (
                lat = ${latitude}
                OR \`long\` = ${longitude}
            )
        ORDER BY score DESC;
    `);


    return Response.success(res, cities[0]);
};
