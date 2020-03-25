const { Organization } = require('../models')

module.exports = {
    getOrganizationsByNameOrCode: async function (req, h) {
        return h.response({
            message: 'all organizations'
        }).code(200)
    },
    createOrganization: async function (req, h){
        let organization = await Organization.create(req.payload)
        return h.response({
            organization: organization,
            message: 'organization created'
        }).code(200)
    },
    updateOrganization: async function (req, h){
        let organization = await Organization.findByPk(req.params.id)
        let newOrganization = await organization.update(req.payload)

        return h.response({
            organization: newOrganization,
            message: 'organization updated'
        }).code(200)
    },
    deleteOrganization: async function (req, h){
        let organization = await Organization.findByPk(req.params.id)
        await organization.destroy()
        
        return h.response({
            message: 'organization deleted'
        }).code(200)
    }
}