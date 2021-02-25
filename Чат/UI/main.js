(function () {
    let login = prompt('Введите ваш логин', 'satpix');
    const messages = [
        {
            id: 1,
            text: 'Текст1',
            createdAt: new Date('2020-01-11T23:00:00'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 2,
            text: 'Текст2',
            createdAt: new Date('2020-01-11T23:01:23'),
            author: 'персонаж1',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 3,
            text: 'Текст3',
            createdAt: new Date('2020-01-11T23:02:03'),
            author: 'персонаж3',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 4,
            text: 'Текст4',
            createdAt: new Date('2020-01-11T23:03:00'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 5,
            text: 'Текст5',
            createdAt: new Date('2020-01-11T23:03:23'),
            author: 'персонаж4',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 6,
            text: 'Текст6',
            createdAt: new Date('2020-01-11T23:04:43'),
            author: 'персонаж2',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 7,
            text: 'Текст7',
            createdAt: new Date('2020-01-11T23:05:07'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж3'
        },
        {
            id: 8,
            text: 'Текст8',
            createdAt: new Date('2020-01-11T23:06:23'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 9,
            text: 'Текст9',
            createdAt: new Date('2020-01-11T23:07:03'),
            author: 'персонаж4',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 10,
            text: 'Текст10',
            createdAt: new Date('2020-01-11T23:08:00'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 11,
            text: 'Текст11',
            createdAt: new Date('2020-01-11T23:08:23'),
            author: 'персонаж4',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 12,
            text: 'Текст12',
            createdAt: new Date('2020-01-11T23:08:43'),
            author: 'персонаж3',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 13,
            text: 'Текст13',
            createdAt: new Date('2020-01-11T23:09:00'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 14,
            text: 'Текст14',
            createdAt: new Date('2020-01-11T23:09:23'),
            author: 'персонаж1',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 15,
            text: 'Текст15',
            createdAt: new Date('2020-01-11T23:10:03'),
            author: 'персонаж3',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 16,
            text: 'Текст16',
            createdAt: new Date('2020-01-11T23:11:00'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж2'
        },
        {
            id: 17,
            text: 'Текст17',
            createdAt: new Date('2020-01-11T23:11:23'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж3'
        },
        {
            id: 18,
            text: 'Текст18',
            createdAt: new Date('2020-01-11T23:11:56'),
            author: 'персонаж2',
            isPersonal: true,
            to: 'satpix'
        },
        {
            id: 19,
            text: 'Текст19',
            createdAt: new Date('2020-01-11T23:12:13'),
            author: 'satpix',
            isPersonal: true,
            to: 'персонаж1'
        },
        {
            id: 20,
            text: 'Текст20',
            createdAt: new Date('2020-01-11T23:13:16'),
            author: 'персонаж4',
            isPersonal: true,
            to: 'satpix'
        }
    ]
    let reverseMessages = messages.reverse();
    // let skip = 0;
    let top = 10;

    function getMessages(skiped, top, filterConfig) {
        let msg = reverseMessages;
            // .slice(skiped, skiped + top);
        for (let i = 0; i < msg.length; i++) {
            createMessageForm(i, msg);
        }
        // skip+=10;
        // return skip;
    }

    function addMessage() {
        let messageTextButton = document.getElementById('messages-text-button')
        let messagesTextTextarea = document.getElementById("messages-text-textarea");
        messageTextButton.onclick = () => {
            if (messagesTextTextarea.value === "") {
                alert("Введите текст!");
            } else {
                let newObject = {
                    id: messages[0].id + 1,
                    text: messagesTextTextarea.value,
                    createdAt: new Date(),
                    author: login,
                    isPersonal: true,
                    to: 'персонаж2'
                }
                // console.log(skip);
                for (let i = 0; i < messages.length; i++) {
                    document.getElementById(messages[i].id.toString()).remove();
                    // console.log(skip);
                    // console.log(messages[i].id.toString());
                }
                messages.unshift(newObject);
                // skip = 0;
                getMessages(0, top);
            }
            messagesTextTextarea.value = "";
        }
    }

    function createMessageForm(i, msg) {
        let messagesChatMessages = document.createElement('div');
        messagesChatMessages.id = msg[i].id;
        let messagesMymessageTitle = document.createElement('div');
        messagesMymessageTitle.className = "messages-mymessage-title";
        let messagesMymessageTitleLogin = document.createElement('div');
        messagesMymessageTitleLogin.className = "messages-mymessage-title-login";
        let messagesMymessageTitleTime = document.createElement('div');
        messagesMymessageTitleTime.className = "messages-mymessage-title-time";
        messagesMymessageTitleLogin.innerHTML = (msg[i].author);
        messagesMymessageTitleTime.innerHTML = (`${msg[i].createdAt.getDate()}.${msg[i].createdAt.getDay()}.${msg[i].createdAt.getFullYear()} ${msg[i].createdAt.getHours()}:${msg[i].createdAt.getMinutes()}:${msg[i].createdAt.getSeconds()}`);
        messagesMymessageTitle.appendChild(messagesMymessageTitleLogin);
        messagesMymessageTitle.appendChild(messagesMymessageTitleTime);
        let messagesMymessageText = document.createElement('div');
        messagesMymessageText.className = "messages-mymessage-text";
        messagesMymessageText.innerHTML = msg[i].text;
        if (msg[i].author == login) {
            messagesChatMessages.className = "messages-mymessage";
            let messagesMymessageContainer = document.createElement('div');
            messagesMymessageContainer.className = "messages-mymessage-container";
            messagesMymessageContainer.appendChild(messagesMymessageTitle);
            messagesMymessageContainer.appendChild(messagesMymessageText);
            messagesChatMessages.appendChild(messagesMymessageContainer);
            let messagesMymessageButtons = document.createElement('div');
            messagesMymessageButtons.className = "messages-mymessage-buttons";
            let messagesEdit = document.createElement('button');
            messagesEdit.className = "messages-edit";
            let messagesDelete = document.createElement('button');
            messagesDelete.className = "messages-delete";
            messagesDelete.addEventListener('click', removeMessages(messagesChatMessages.id), false);
            messagesMymessageButtons.appendChild(messagesEdit);
            messagesMymessageButtons.appendChild(messagesDelete);
            messagesChatMessages.appendChild(messagesMymessageButtons);
        } else {
            messagesChatMessages.className = "messages-chatmessages";
            messagesChatMessages.appendChild(messagesMymessageTitle);
            messagesChatMessages.appendChild(messagesMymessageText);
        }
        let messagesChatContainer = document.getElementById('messages-chat-container');
        // messagesChatContainer.appendChild(messagesChatMessages);
        messagesChatContainer.insertBefore(messagesChatMessages, messagesChatContainer.firstChild);
    }

    function removeMessages(messageId) {
        return function () {
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].id == messageId) {
                    messages.splice(i, 1);
                    console.log(messages);
                    document.getElementById(messageId).remove();
                }
            }
        }
    }

    // function loadMessage(skip, top) {
    //     let messageButtonLoad = document.getElementById('messages-button-load');
    //     messageButtonLoad.onclick = () => {
    //         if (skip<messages.length){
    //             console.log(skip);
    //         }
    //         alert('asd');
    //             getMessages(skip, 10);
    //     }
    //     return skip;
    // }

    addMessage();
    getMessages(0, top);
    // loadMessage(0, top);
}());
