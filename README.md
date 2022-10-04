# projektarbeit294
## Author Alex Stern

## Projekt
Eine Todo Webapplikation mit Login in der man Aufgaben hinzufügen und löschen kann. 

Login Data:
```
Email: 'example@example.ch'

Password: 'm294'
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TestProtokoll
| **Testname**                            | **Procedure**                                                                                    | **expected Result**                                                                              | **acctual Result**                                                                               | **WorkingAsExpected** | **Testing Date** |
|-------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------|--------------|
| Login with false Password           | 1. Fill Email with: example@example.com <br>2. Fill Password with: test123 <br> 3. Press login button | alert('Falsches Passwort') and login fails                                                      | alert('Falsches Passwort') and login fails                                                           | true             | 04.10.22  |
| Create Task with only spaces        | 1. Fill Create Task input field with '    ' <br> 2. Press create button                           | alert('Invalid Task Name')                                                                   | alert('Invalid Task Name')                                                                   | true              | 04.10.22   |
| Update Task with only spaces        | 1. Press Pen icon to edit task <br> 2. Fill appeared input field with '    ' <br> 3. Press Save icon   | alert('Ungültiger Name')                                                                   | alert('Ungültiger Name')                                                                   | true              | 04.10.22   |
| Delete Task                         | 1. Press trash icon on any task                                                              | alert('taskName + " wurde gelöscht"'), task deleted and page reload | alert( title + ' wurde gelöscht'), task deleted and page reload | true              | 04.10.22  |
