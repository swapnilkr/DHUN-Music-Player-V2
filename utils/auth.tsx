import { serialize, parse } from 'cookie';

//TODO
const TOKEN_NAME = 'Blah_sth';

export function setTokenCookie(res:any, token:any) {
    const cookie = serialize(TOKEN_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
        path: '/',
    });

    res.setHeader('Set-Cookie', cookie);
}

export function removeTokenCookie(res:any) {
    const cookie = serialize(TOKEN_NAME, '', {
        maxAge: -1,
        path: '/',
    });

    res.setHeader('Set-Cookie', cookie);
}

export function getTokenFromCookie(req:any) {
    return parse(req.headers.cookie || '')[TOKEN_NAME];
}
