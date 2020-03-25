const service = require('../controllers/serviceController')
const organizationController = require('../controllers/organizationController')

module.exports = [
    {
        method: 'GET',
        path: '/organization',
        handler: organizationController.getOrganizationsByNameOrCode
    },
    {
        method: 'POST',
        path: '/organization',
        handler: organizationController.createOrganization
    },
    {
        method: 'PUT',
        path: '/organization/{id}',
        handler: organizationController.updateOrganization
    },
    {
        method: 'DELETE',
        path: '/organization/{id}',
        handler: organizationController.deleteOrganization
    },
    {
        method: '*',
        path: '/{any*}',
        handler: service.notFound
    }
]