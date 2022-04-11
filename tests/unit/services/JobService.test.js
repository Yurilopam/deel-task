jest.mock('@src/repositories/ProfileRepository')

const { payJob } = require('@src/services/JobService')
const { findProfileByPk } = require('@src/repositories/ProfileRepository')

test('payJob', async () => {

    const CONTRACTOR_ID_MOCK = 1

    const profileMock = {
        update: jest.fn()
    }
    const jobMock = {
        contract: {
            contractor_id: CONTRACTOR_ID_MOCK
        },
        update: jest.fn()
    }
    const contractorMock = {
        update: jest.fn()
    }

    findProfileByPk.mockReturnValueOnce(Promise.resolve(contractorMock))
    await payJob(profileMock, jobMock)

    expect(findProfileByPk).toHaveBeenCalledTimes(1)
    expect(jobMock.update).toHaveBeenCalledTimes(1)
    expect(profileMock.update).toHaveBeenCalledTimes(1)
    expect(contractorMock.update).toHaveBeenCalledTimes(1)
})
