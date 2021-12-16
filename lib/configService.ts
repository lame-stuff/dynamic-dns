export default class configService {
    public static async getConfig<T>(name: string): Promise<T> {
        // Currently only supports getting configuration from environment
        return process.env[name] as unknown as T
    }
}