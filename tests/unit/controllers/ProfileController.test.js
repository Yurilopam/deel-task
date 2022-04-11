jest.mock('@src/repositories/JobRepository')
jest.mock('@src/services/ProfileService')

const { clientDeposit } = require('@src/controllers/ProfileController')
const { mockRequest, mockResponse } = require('jest-mock-req-res')
const { findSumJobsPriceNotTerminatedNotPaidByProfileId } = require('@src/repositories/JobRepository')
const { validateAndDepositClientMoney } = require('@src/services/ProfileService')

test('clientDepositSuccess', async () => {

    const AMOUNT_MOCK = 100
    const PROFILE_ID_MOCK = 1
    const SUM_MOCK = 200

    const reqMock = mockRequest({ 
        params: {
            amount: AMOUNT_MOCK
        },
        profile: {
            id: PROFILE_ID_MOCK
        }
    })
    const resMock = mockResponse()

    findSumJobsPriceNotTerminatedNotPaidByProfileId.mockReturnValueOnce(Promise.resolve(SUM_MOCK))

    await expect(clientDeposit(reqMock, resMock)).resolves.toEqual(resMock)
    expect(findSumJobsPriceNotTerminatedNotPaidByProfileId).toHaveBeenCalledTimes(1)
    expect(validateAndDepositClientMoney).toHaveBeenCalledTimes(1)
})