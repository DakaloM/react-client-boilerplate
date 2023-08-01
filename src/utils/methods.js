import { useNavigate } from "react-router-dom"
import { publicRequest } from "./requestMethod"


export const formatDate = (x) => {
    const date = new Date(x)
    return date.getDate() + " " + date.toLocaleString('default', {month: 'long'}) + " " + date.getFullYear()
}

const getresponseError = (error, setCompleteMessage) => {
    const message = error.response ? error.response.data.message ? error.response.data.message : "Error!. Something went wrong" : "Network Error"
    if(message === 'Invalid Token') {
        setCompleteMessage("Error!. Your session has expired. Please sign in again")
    }
    else {

        setCompleteMessage(message)
    }
}

export const handleInputs = (e, setInputs) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
}

const loginUser = async(user,navigate, setUser) => {
    try {
        const res = await publicRequest.post("auth/login", {...user});
        console.log(res.data)
        setUser(res.data)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const register = async (inputs, setLoading, setComplete, setCompleteMessage, navigate, setUser) => {
    setLoading(true);
    try {
        const res = await publicRequest.post("auth/register", {...inputs});
        setComplete(true);
        setCompleteMessage("Success. " + res.data.message)
        setLoading(false);
        const user = {
            username: inputs.username,
            email: inputs.email,
            password: inputs.password,
        }
        await loginUser(user, navigate, setUser)

    } catch (error) {
        setComplete(true)
        getresponseError(error, setCompleteMessage);
        setLoading(false);
    }
}

export const logout = (setUser) => {
    localStorage.removeItem('user')
    setUser(null);
}


export const login = async (inputs, setLoading, setComplete, setCompleteMessage, setUser, navigate) => { 
    setLoading(true);
    let user = {
        username: "",
        email: "",
        password: ""
    }

    if(inputs.loginId.includes("@")){
        user.email = inputs.loginId
        user.password = inputs.password
    } else {
        user.username = inputs.loginId
        user.password = inputs.password
    }
    try {
        const res = await publicRequest.post("auth/login", {...user});
        setUser(res.data)
        setComplete(true);
        setLoading(false);
        navigate("/")
    } catch (error) {
        setComplete(true)
        getresponseError(error, setCompleteMessage);
        setLoading(false);
    }


}

export const forgotPassword = async(email, setLoading, setComplete, setCompleteMessage) => {
    
    setLoading(true);
    
    try {
        const res = await publicRequest.post("auth/forgotPassword", {email});
        setComplete(true);
        setCompleteMessage("Success!. " + res.data.message)
        setLoading(false);
    } catch (error) {
        setComplete(true);
        getresponseError(error, setCompleteMessage)
        setLoading(false)
    }

}

export const resetPassword = async(token, password, setLoading,setComplete, setCompleteMessage,  navigate) => {
    setLoading(true);
    try {
        const res = await publicRequest.patch(`auth/resetPassword/${token}`, {password});
        setLoading(false);
        setComplete(true);
        setComplete("Success!. " + res.data.message)
        navigate('/resertPassword/success');
    } catch (error) {
        getresponseError(error, setCompleteMessage);
        setLoading(false);
        
    }
}

export const validateInputs = () => {
    const password = document.getElementById('newPassword').value;
    const confPassword = document.getElementById('confPassword').value;
    if(password === "") {
        return false;
    } else if (confPassword === "") {
        return false;
    }
    else {
        return true;
    }
}