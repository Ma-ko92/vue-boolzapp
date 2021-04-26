var app = new Vue({
    
    // Element ID
    el: "#root",

    data:{
       
        // Index
        activeContact: 0,

        // User message input
        newMessageText: "",

        // User search input
        searchTextFilter: "",

        // set the message options active
        activeMessage: false,

        // User personal Profile
        userProfile: {
            name: "Mario",
            avatar: "_7"
        },

        // User Contacts
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        dropDownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        dropDownMenu: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        dropDownMenu: false
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
                        status: 'sent',
                        dropDownMenu: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropDownMenu: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropDownMenu: false
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
                        status: 'received',
                        dropDownMenu: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropDownMenu: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        dropDownMenu: false
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
                        status: 'sent',
                        dropDownMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropDownMenu: false
                    }
                ],
            },
        ]
    },

    // Function
    methods: {
        thisActiveContact(index) {
            this.activeContact = index;
            this.activeMessage = false;
        },

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

                setTimeout(() => {
                    thisChat.messages.push(
                      {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: "ok",
                        status: "received"
                      }
                    )
                }, 1000);

                  this.newMessageText = "";
            }

        },
        // This function show or hide the options of a message on click on the icon
        menuDropdown(msgIndex) {
            if( this.activeMessage === msgIndex) {
                this.activeMessage = false;
            } else {
                this.activeMessage = msgIndex;
            }
        
        
        },

        deleteMessage(msgIndex) {
            this.contacts[this.activeContact].messages.splice(msgIndex, 1);
            this.activeMessage = false;
        }
        
    
    }
});