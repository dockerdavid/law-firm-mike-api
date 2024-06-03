import * as joi from 'joi'
import 'dotenv/config'

interface EnvVars {
    EMAIL_HOST: string
    EMAIL_USERNAME: string
    EMAIL_PASSWORD: string
    EMAIL_FROM: string
}

const envSchema = joi.object({
    EMAIL_HOST: joi.string().required(),
    EMAIL_USERNAME: joi.string().required(),
    EMAIL_PASSWORD: joi.string().required(),
    EMAIL_FROM: joi.string().required(),
}).unknown(true);

const { error, value } = envSchema.validate( process.env )

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value

export default envVars