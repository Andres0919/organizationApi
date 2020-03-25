
module.exports = {
    notFound: async function (req, h) {
        return h.response('service not found').code(404)
    }
}