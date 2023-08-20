const router = require('express').Router();
const { History } = require('../../models');
const withAuth = require("../../utils/auth");

router.delete('/', withAuth, async (req, res) => {
    try {
        const historyData = await History.destroy({
            where: {
                user_id: req.session.user_id
            }
        });

        if (!historyData) {
            res.status(404).json({ message: "History not found!" });
            return;
        }
        res.status(200).json(historyData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;