var app = new Vue({
    
    // Element ID
    el: "#root",

    data:{
       
        // Current active user.
        activeContact: 0,

        // User message input.
        newMessageText: "",

        // User search input.
        searchTextFilter: "",

        // status of the current active message.
        activeMessage: false,

        // User personal Profile.
        userProfile: {
            name: "Mario",
            avatar: "_7"
        },

        // User Contacts.
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },

    // Function
    methods: {
        // this function sets the active contact, equal to his index.
        thisActiveContact(index) {
            this.activeContact = index;
            // this option shows the menu for the active contact only.
            this.activeMessage = false;
        },
        // this function filters the words entered by the user and compares
        // them with the names of the contact list.
        searchFilter() {
            this.contacts.forEach((element) => {
                if(element.name.toLowerCase().includes(this.searchTextFilter.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

        // this function will record the message entered by the user
        // via input and insert it into an object with its properties.
        newMessage() {
            let thisChat = this.contacts[this.activeContact];
            if(this.newMessageText != " "  && this.newMessageText.length > 0  ) {
                thisChat.messages.push(
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMessageText,
                    status: 'sent'
                }
                )
                // this function will send a reply message after 1 second
                setTimeout(() => {
                    thisChat.messages.push(
                      {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: "ok",
                        status: "received"
                      }
                    )
                }, 1000);

                //   Reset the input message
                  this.newMessageText = "";
            }

        },
        // this function shows or hides the message options menu when the chevron is clicked.
        menuDropdown(msgIndex) {
            if( this.activeMessage === msgIndex) {
                this.activeMessage = false;
            } else {
                this.activeMessage = msgIndex;
            }
        
        
        },
        // this function will delete the message selected in the message options menu.
        deleteMessage(msgIndex) {
            this.contacts[this.activeContact].messages.splice(msgIndex, 1);
            // reset 
            this.activeMessage = false;
        },

        getLastMsgDate() {
            const activeContactMsg = this.contacts[this.activeContact].messages;
            return activeContactMsg[activeContactMsg.length - 1].date;
        }
        
    
    }
});