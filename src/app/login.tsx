import { LoginView } from "../view-models/login/login.view"
import { useLoginViewModel } from "../view-models/login/useLogin.view"

export default function Login() {
    const props = useLoginViewModel()

    return <LoginView {...props} />
}