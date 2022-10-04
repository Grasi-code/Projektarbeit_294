export default {
    name: 'TodoItems',
    data() {
        return {
            infos: [],
            updating: null,
            loggedIn: JSON.parse(localStorage.getItem("loggedIn")),
            userUpdateInput: ""
        }
    },
    methods: {
        onlySpaces: function(str) {
            return str.trim().length === 0;
        },
        getInfos: function() {
            fetch('http://127.0.0.1:3000/auth/jwt/tasks', { 
                credentials: 'include', 
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`} })
                .then((res) => {
                    if (res.status !== 200) {
                        return
                    }
                    return res.json()
                })
                .then((data) => {
                    this.infos = data;
                })
        },
        tasksDelete: function(id, title) {
            fetch('http://127.0.0.1:3000/auth/jwt/task/' + id, { 
                credentials: 'include', 
                method: 'delete',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`}
            })
                .then(() => {
                    alert( title + ' wurde gelöscht')
                    window.location.reload();
                })
        },
        tasksUpdate: function(id) {
            if(this.onlySpaces(this.userUpdateInput) == false && this.userUpdateInput.length != 0){
                fetch('http://127.0.0.1:3000/tasks', {
                    method: 'put',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`},
                    body: JSON.stringify({ id: id, completed: false, title: this.userUpdateInput })
                })
                .then(() => {
                    alert("Aufgabe erfolgreich aktualisiert")
                    window.location.reload()
                })
            }else if(this.userUpdateInput.length == 0){
                this.updating = null
            }else{
                alert("Ungültiger Name")
            }
        },
        taskInfo: function(title) {
            this.showInfo = !this.showInfo
            this.element = title
        }
    },
    created: function() {
        this.getInfos()
    }
}