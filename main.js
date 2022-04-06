var app = new Vue({
    el: '#root',
    data: {
        profilo: {
            name: 'Sofia',
            img: 'avatar_io'
        },
        contacts: [{
                name: 'Michele',
                avatar: 'avatar_1',
                visible: true,
                messages: [{
                        date: '',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'avatar_6',
                visible: true,
                messages: [{
                        date: '',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'avatar_7',
                visible: true,
                messages: [{
                        date: '',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'avatar_8',
                visible: true,
                messages: [{
                        date: '',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        indexChanged: 0,
        newMessageText: ''
    },

    methods:{
        changeContactsIndex: function (index) {
            console.log(index)
            this.indexChanged = index;
            console.log(`l'indice è diventato: ${this.indexChanged}`);
        },

        newMessage: function(){
            let currentDate = dayjs().format('DD/MM/YYYY');
            let hour = dayjs().get('hour');
            let minute =  dayjs().get('minute');

            let newMessageObject = {
                date: `${currentDate} ${hour} ${minute}`,
                message: this.newMessageText,
                status: 'sent'
            } 
            let newMessageObjectReceived = {
                date: `${currentDate} ${ hour}:${minute}`,
                message: 'ok',
                staus: 'received'
            }

            this.contacts[this.indexChanged].messages.push(newMessageObject);

            setTimeout(
                () => {
                    this.contacts[this.indexChanged].messages.push(newMessageObjectReceived)
                }, 3000);
            
        },
        filterContacts: function(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.filterText.toLowerCase())){
                    element.visible = true;
                } else {
                    element.visible = false;
                }

            });
        },

        
    }


})