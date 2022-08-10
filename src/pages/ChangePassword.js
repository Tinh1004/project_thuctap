import ChangePassword from '../components/form_change/ChangePassword';
// import ForgotPassword from '../components/form_forgot/forgot';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
export default function ChangePasswordPage(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/login");
        }
    }, [])

    return (
        <div>
            <form>
                <ChangePassword></ChangePassword>
            </form>
        </div>

    )
}