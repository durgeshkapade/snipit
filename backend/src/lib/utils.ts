import cryptoRandomString from 'crypto-random-string';
export function uniqueIdGenerator(): string {
    return cryptoRandomString({ length: 5})
}