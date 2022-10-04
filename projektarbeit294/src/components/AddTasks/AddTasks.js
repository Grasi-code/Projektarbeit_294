export default {
    name: 'AddTask',
    data() {
        return {
            createTaskName: null,
            inputData: { title: this.createTaskName },
            infos: [],
            loggedIn: JSON.parse(localStorage.getItem("loggedIn"))
        }
    },
    methods: {
        onlySpaces: function(str) {
            return str.trim().length === 0;
        },
        tasksPost: function() { //function for adding a task
            if(this.onlySpaces(this.createTaskName) == false && this.createTaskName.length != 0){
                fetch('http://127.0.0.1:3000/auth/jwt/tasks', { 
                    method: 'post', body: JSON.stringify({ title: this.createTaskName }), 
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`
                } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                    this.createTaskName = "";
                    alert("Aufgabe wurde hinzugefügt")
                    window.location.reload()
                });
            }else{
                alert("Ungültiger Name")

            }
        },
    },        
    watch: { // to see if the user is logged in
        loggedIn: () => JSON.parse(localStorage.getItem("loggedIn"))   
    }
}