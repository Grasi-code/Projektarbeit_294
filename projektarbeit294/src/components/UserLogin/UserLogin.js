export default {
    name: 'UserLogin',
    data() {
        return {
            loginEmail: "",
            loginPassword: "",
            infos: [],
            loggedIn: JSON.parse(localStorage.getItem("loggedIn")),
        }
    },
    methods: {
        userLogin: function() {
            if(this.loginPassword === 'm294'){
                fetch('http://127.0.0.1:3000/auth/jwt/sign', { 
                    credentials: "include",
                    method: "post", 
                    body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword }), 
                    headers: { 'Content-Type': 'application/json', } })
                .then((res) => res.json())
                .then((res) => {
                    this.loggedIn = true
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("loggedIn", true)
                    window.location.reload()
                })
                .catch(() => alert("failed"))
            }else{
                alert("Wrong Password")
            }
        },
        userLogout: function() {
            fetch('http://127.0.0.1:3000/auth/cookie/logout', { 
                credentials: "include", 
                method: "post", body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword }), 
                headers: { 'Content-Type': 'application/json', } })
                .then(() => {
                    localStorage.setItem("token", undefined)
                    this.loggedIn = false
                    localStorage.setItem("loggedIn", false)
                    
                    window.location.reload();
                });
        }
    },
}