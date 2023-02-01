import { FormEvent, useState } from "react";
import style from './Theme.module.css';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const onUsernameChange = (event: FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }

    const onPasswordChange = (event: FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        if (!username || !password) {
            setError('Username and Password are mandatory!');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("https://aliveapi.cyclic.app/statsblogin", {
                // const response = await fetch("http://localhost:5000/statsblogin", {
                "headers": {
                    "content-type": "application/json",
                },
                "body": JSON.stringify({ username, password }),
                "method": "POST"
            });

            const { success, error, key } = await (response as any).json();

            if (!success) {
                setError(error + ', please try again..');
                return;
            }

            else if (success && key && typeof window !== 'undefined') {
                window.localStorage.setItem('APIKEY', key);
                // window.location.reload();
                router.replace('/')
            }
        } catch (error: any) {
            setError(error?.message + ', please try again..');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={style.mt150 + ' container'}>
            <div className="row">
                <div className="col-sm" />
                <div className="col-sm">
                    <form onSubmit={login}>
                        <div>
                            <label htmlFor="username" className="form-label">Username</label>
                            <input value={username} onChange={onUsernameChange} type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="password" />
                        </div>

                        <div className="d-grid gap-2 mb-2">
                            <button type="submit" disabled={loading} className="btn btn-warning">
                                {loading ? (
                                    <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Logging in..</>
                                ) : 'Login'}
                            </button>
                        </div>

                        {!!error && (
                            <div className="text-danger">
                                {error}
                            </div>
                        )}

                    </form>
                </div>
                <div className="col-sm" />
            </div>
        </div>
    )
}