const { validateAndDepositClientMoney } = require('@src/services/ProfileService')

test('validateAndDepositClientMoney', async () => {

    const amountMock = 10
    const profileMock = {
        balance: 200,
        update: jest.fn()
    }
    const sumJobsPriceMock = 100

    await expect(validateAndDepositClientMoney(amountMock, profileMock, sumJobsPriceMock)).resolves.toStrictEqual({ client_new_balance: 210, percentSumJobs: 25 })

    expect(profileMock.update).toHaveBeenCalledTimes(1)

})