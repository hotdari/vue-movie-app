export.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'HOTDARI',
            age: 33,
            email: 'hotdari90@naver.com'
        })
    }
}