const axios = require('axios').default;

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/createCustomer
 */
exports.createCustomer = async (req, res, next) => {
    try {
        const customerData = {
            bdaIndividualData: {
                firstName: "Joe",
                lastName: "Alan",
                middleName: "Alan",
                birthDate: "2020-12-31",
                birthPlace: "Sydney",
                citizenshipId: 171,
                employee: false,
                titleId: 251,
                pep: false,
                vip: false
            },
            customerType: "INDIVIDUAL",
            dosri: false,
            isPwd: false
        }
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/CreateCustomer',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
            data: JSON.stringify(customerData)
        });
        console.log(response);
        res.status(200).json({
            data: response
        });
    } catch (error) {
        console.log(error)
        res.status(error.response.status).json({
            message: error.message
        });
    }
}