function index (req, res) {
    return res.status(200).json({
        success: true
    })
}

module.exports = {
    index
}