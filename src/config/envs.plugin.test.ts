import { envs } from "./envs.plugin"



describe('envs.plugin.ts', () => {

    test('envs should return env options', () => {

        expect( envs ).toStrictEqual(
            {
                PORT: 3000,
                MAILER_SERVICE: 'gmail',
                MAILER_EMAIL: 'gegewp.91@gmail.com',
                MAILER_SECRET_KEY: 'hytdcbchvwcetpvo',
                PROD: false,
                MONGO_URL: 'mongodb://gege:123456@localhost:27017/',
                MONGO_DB_NAME: 'NOC-TEST',
                MONGO_USER: 'gege',
                MONGO_PASS: '123456'
            }
        );

    });


    test('envs should return an error if not found env', async() => {

        jest.resetModules();
        process.env.PORT = 'ABC'

        try {

            await import('./envs.plugin');
            expect(true).toBe(false);
            
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }

    });

})