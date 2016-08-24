const comments = [
    {
        body: 'I’m just testing the comment section. I really like this car. I especially like the fact that it only costs $3M. That’s amazing.',
        time: '4 days ago',
        relationships: {
            author: [
                {
                    id: 1,
                    name: 'Alfred Henderson'
                }
            ],
            response: [
                {
                    body: 'Thanks Alfred. I’m glad you like it. We decided to release it with $3M price since this is our first STRV M6 car. We’re still learning.',
                    time: '4 days ago',
                    relationships: {
                        author: [
                            {
                                id: 2,
                                name: 'Steven Clayton'
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        body: 'Yeah! Attorney-client privilege. I mean, that’s a big one. That’s something I provide for you. If I give up Pinkman, well, then you’re gonna be asking, Saul gives ‘em up pretty easy. What’s to keep him from giving me up? Y’see, so, then where’s the trust?',
        time: '5 days ago',
        relationships: {
            author: [
                {
                    id: 3,
                    name: 'Jim Lindsey'
                }
            ],
            response: []
        }
    }
];

export default comments;